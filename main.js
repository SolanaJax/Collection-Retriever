const apiKey = process.env.api_key

const url = "https://mainnet.helius-rpc.com/?api-key=" + apiKey

// List of blacklisted addresses in order (Tensor, Magiceden)
const blacklistedMarketplaceOwners = [
  "4zdNGgAtFsW1cQgHqkiWyRsxaAgxrSRRynnuunxzjxue",
  "1BWutmTvYPwDtmw9abTkS4Ssr8no61spGAvW1X6NDix",
];

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  let themeSwitch = document.querySelector(".theme-switch");
  if (document.body.classList.contains("dark-mode")) {
    themeSwitch.textContent = "☀️";
  } else {
    themeSwitch.textContent = "🌑";
  }
}

document
  .getElementById("inputForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const marketplace = document.getElementById("flickToggle").checked;

    let data = await fetchCollection(
      event.target.elements["inputField"].value,
      marketplace
    );

    let formattedData = JSON.stringify(data, null, 4);
    document.getElementById("code").textContent = formattedData;

    let codeContainer = document.querySelector(".code-container");
    codeContainer.classList.add("visible");
  });

document.querySelector(".copy-button").addEventListener("click", function () {
  let code = document.getElementById("code").textContent;
  navigator.clipboard.writeText(code).then(() => {
    let originalText = this.textContent;
    this.textContent = "Copied!";
    setTimeout(() => (this.textContent = originalText), 2000);
  });
});

document
  .querySelector(".download-button")
  .addEventListener("click", function () {
    let code = document.getElementById("code").textContent;
    let blob = new Blob([code], { type: "application/json" });
    let url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = "holderlist.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

function fillInput(text) {
  document.getElementById("inputField").value = text;
}

const fetchCollection = async (creatorAddress, marketplace) => {
  let page = 1;
  let mintList = [];
  let holderList = [];
  let noMarketplaceHolderList = [];

  while (page) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "my-id",
        method: "getAssetsByCreator",
        params: {
          creatorAddress: creatorAddress,
          onlyVerified: true,
          page: page,
          limit: 1000,
        },
      }),
    });

    const { result } = await response.json();

    for (const nfts of result.items) {
      if (nfts.burnt === false) {
        mintList.push(nfts.id);
        holderList.push(nfts.ownership.owner);
      }
    }

    if (result.total !== 1000) {
      page = false;
    } else {
      page++;
    }
  }

  if (marketplace) {
    for (const holderAddress of holderList) {

      let blacklisted = false
      for (const blacklistedAddress of blacklistedMarketplaceOwners) {
        if (blacklistedAddress === holderAddress) {
          blacklisted = true
        }
      }
      if (!blacklisted) {
        noMarketplaceHolderList.push(holderAddress)
      }
    }
    return noMarketplaceHolderList
  } else {
    return holderList;
  }
};
