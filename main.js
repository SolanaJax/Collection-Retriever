const rpcURLFromHeliusThatIDontCareIsExposedForThisToolSinceItIsTheBasicFreeOneAndItsJustAToolToHelpPeople = "https://mainnet.helius-rpc.com/?api-key=c31bcee9-bae5-4ce0-84ef-c8cf03452996"

window.onload = function () {
  const currentTheme = loadThemePreference()
  if (currentTheme === "dark-mode") {
    document.body.classList.add("dark-mode")
    document.querySelector(".switch-theme").textContent = "☀️"
  }
}

// List of blacklisted addresses in order (Tensor, Magiceden)
const blacklistedMarketplaceOwners = [
  "4zdNGgAtFsW1cQgHqkiWyRsxaAgxrSRRynnuunxzjxue",
  "1BWutmTvYPwDtmw9abTkS4Ssr8no61spGAvW1X6NDix",
]

function saveThemePreference(theme) {
  localStorage.setItem("theme", theme)
}

function loadThemePreference() {
  return localStorage.getItem("theme")
}

function themeToggle() {
  const currentTheme = loadThemePreference()
  const themeSwitch = document.querySelector(".switch-theme")

  if (currentTheme === "dark-mode") {
    document.body.classList.remove("dark-mode")
    themeSwitch.textContent = "🌑"
    saveThemePreference("light-mode")
  } else {
    document.body.classList.add("dark-mode")
    themeSwitch.textContent = "☀️"
    saveThemePreference("dark-mode")
  }
}

const inputField = document.getElementById("inputField")
inputField.addEventListener("input", function () {
  hideCodeViewer()
})

function hideCodeViewer() {
  document.getElementById("code").textContent = ""
  document.querySelector(".json-container").classList.remove("visible")
}

document.getElementById("input-form").addEventListener("submit", async function (event) {
    event.preventDefault()

    if (event.target.elements["inputField"].value === "") return

    const submitButton = document.querySelector('button[type="submit"]')
    submitButton.disabled = true
    submitButton.textContent = "Retrieving Collection..."

    const marketplace = document.getElementById("marketplace-checkbox").checked

    submitButton.classList.add("loading-in")

    let data = await fetchCollection(
      event.target.elements["inputField"].value,
      marketplace
    )

    document.getElementById("resultQTY").textContent = "Result: " + data.length

    let formattedData = JSON.stringify(data, null, 4)
    document.getElementById("code").textContent = formattedData

    let codeContainer = document.querySelector(".json-container")
    codeContainer.classList.add("visible")

    submitButton.classList.remove("loading-in")
    submitButton.classList.add("loading-out")

    submitButton.textContent = "Get Holderlist"

    setTimeout(() => {
      submitButton.disabled = false
      submitButton.classList.remove("loading-out")
    }, 1000)
  })

document.querySelector(".copy-button").addEventListener("click", function () {
  let code = document.getElementById("code").textContent
  navigator.clipboard.writeText(code).then(() => {
    let originalText = this.textContent
    this.textContent = "Copied!"
    setTimeout(() => (this.textContent = originalText), 2000)
  })
})

document.querySelector(".download-button").addEventListener("click", function () {
    let code = document.getElementById("code").textContent
    let blob = new Blob([code], { type: "application/json" })
    let url = URL.createObjectURL(blob)

    let a = document.createElement("a")
    a.href = url
    a.download = "holderlist.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  })

function fillInput(text) {
  document.getElementById("inputField").value = text
  hideCodeViewer()
}

const fetchCollection = async (creatorAddress, marketplace) => {
  let page = 1
  let mintList = []
  let holderList = []
  let noMarketplaceHolderList = []

  while (page) {
    const response = await fetch(rpcURLFromHeliusThatIDontCareIsExposedForThisToolSinceItIsTheBasicFreeOneAndItsJustAToolToHelpPeople, {
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
    })

    const { result } = await response.json()

    for (const nfts of result.items) {
      if (nfts.burnt === false) {
        mintList.push(nfts.id)
        holderList.push(nfts.ownership.owner)
      }
    }

    if (result.total !== 1000) {
      page = false
    } else {
      page++
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
    return holderList
  }
}
