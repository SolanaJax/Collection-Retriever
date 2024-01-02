const secureRPC = "https://jittery-charmian-fast-mainnet.helius-rpc.com/"

// List of blacklisted addresses in order (Tensor, Magiceden)
const blacklistedMarketplaceOwners = [
  "4zdNGgAtFsW1cQgHqkiWyRsxaAgxrSRRynnuunxzjxue",
  "1BWutmTvYPwDtmw9abTkS4Ssr8no61spGAvW1X6NDix",
]

const collectionBoxArray = [
  { id: '46pcSL5gmjBrPqGKFaLbbCmR6iVuLJbnQy13hAe7s6CC', imgSrc: 'media/genesistoken.png', text: 'Saga Genesis Token', mcc: true },
  { id: '6mszaj17KSfVqADrQj3o4W3zoLMTykgmV37W4QadCczK', imgSrc: 'media/claynosaurz.png', text: 'Claynosaurz', mcc: true },
  { id: 'J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w', imgSrc: 'media/madlads.jpg', text: 'Mad Lads', mcc: true },
  { id: 'ABFpGsZBHdfsst5HoCdHXfV17eNEP6cQAFqpV3HApUYi', imgSrc: 'media/namaste.png', text: 'Namaste by Solana Sensei', mcc: true },
  { id: 'SMBtHCCC6RYRutFEPb4gZqeBLUZbMNhRKaMKZZLHi7W', imgSrc: 'media/smb2.png', text: 'SMB2', mcc: true },
  { id: '8Rt3Ayqth4DAiPnW9MDFi63TiQJHmohfTWLMQFHi4KZH', imgSrc: 'media/smb3.png', text: 'SMB3', mcc: true },
  { id: 'BuAYoZPVwQw4AfeEpHTx6iGPbQtB27W7tJUjgyLzgiko', imgSrc: 'media/quekz.png', text: 'Quekz', mcc: true },
  { id: '3saAedkM9o5g1u5DCqsuMZuC4GRqPB4TuMkvSsSVvGQ3', imgSrc: 'media/okaybear.png', text: 'Okay Bear', mcc: true },
  { id: 'J6RJFQfLgBTcoAt3KoZFiTFW9AbufsztBNDgZ7Znrp1Q', imgSrc: 'media/gg.png', text: 'Galactic Gecko', mcc: true },

  { id: 'HLGE9SnPUzS5wWdLXbqbmKiTpUxWKjRFL78y6uey8pSe', imgSrc: 'media/metame.jpg', text: 'Metame', mcc: true },
  { id: '69k55dCTwiUPNgaTZ8FVMADorTvEGJEGuAGEB7m1qB1S', imgSrc: 'media/bodo.jpg', text: 'BoDoggos', mcc: true },
  { id: 'ESWcNfagB4ixp5byYRAwR8VrsrX9FMpL2D5EPZD8ga8Q', imgSrc: 'media/rex.jpg', text: 'Annoyed Rex Club', mcc: false },
  { id: 'F645t6gugvsmfo5uSm72WsChY4prdUDMkjaSmppvbvb9', imgSrc: 'media/whales.png', text: 'THE WHALES', mcc: true },
  { id: 'Gvj3urg4ZQYQ4BRQpA8SeAX6GhuvRbvfB3TVVEKeKBnb', imgSrc: 'media/bonkz.png', text: 'Bonkz', mcc: true },
  { id: '5ucdKHbPfmsWowXSNfHoiYEJ55kfFmvEdHii5RtjHpiH', imgSrc: 'media/wolf.jpg', text: 'Wolf Capital', mcc: true },
  { id: '8vE4uASPp9WbS9Ls2qzJ9fpUBpR3UrTG3hBZXdAJQ9mz', imgSrc: 'media/mbb.png', text: 'Monkey Baby Business', mcc: true },
  { id: 'DSwfRF1jhhu6HpSuzaig1G19kzP73PfLZBPLofkw6fLD', imgSrc: 'media/daa.png', text: 'Degenerate Ape Academy', mcc: true },
  { id: 'BUjZjAS2vbbb65g7Z1Ca9ZRVYoJscURG5L3AkVvHP9ac', imgSrc: 'media/fff.svg', text: 'Famous Fox Federation', mcc: true },

  { id: 'B7aepuPdsXJytu28j4UJQNrLLieMxoSYjyHMf2P9VFDi', imgSrc: 'media/sdg.jpg', text: 'Exiled DeGods', mcc: false },
  { id: '6o3ggULJGUBX8CvsGhomfZFirUYdH3wVdgT2d4Q7yHb8', imgSrc: 'media/sac.png', text: 'Stoned Ape Crew', mcc: true },
  { id: '2kEAck1FyW8TxB5SprEnasb4gkaahTdDV83wPtxm9y32', imgSrc: 'media/cf.png', text: 'Cyber Frogs', mcc: true },
  { id: 'SSWJ56FUJjG71MQeb5k5koe24prXjngUMCTScrm88KL', imgSrc: 'media/js.jpg', text: 'Jakey Selfies', mcc: true },
  { id: 'EG1XZWddWV5H1HADtXiWNqNwuHBoBSeH4f21AnfdZx3x', imgSrc: 'media/turtles.png', text: 'Turtles', mcc: true },
  { id: '9jnJWH9F9t1xAgw5RGwswVKY4GvY2RXhzLSJgpBAhoaR', imgSrc: 'media/ovols.png', text: 'Ovols', mcc: true },
  { id: 'CPCK6qE47hhg2QrS5cP2TwWniNt5dJvGB1VcTu44izBy', imgSrc: 'media/gs.jpg', text: 'Grim Syndicate', mcc: true },
  { id: 'aLs8rXD8NoYwgnCFzBofsGdwaocePAkzT1UFX1WmwaR', imgSrc: 'media/basc.png', text: 'Bored Ape Solana Club', mcc: true },
  { id: '5f2zrjBonizqt6LiHSDfbTPH74sHMZFahYQGyPNh825G', imgSrc: 'media/wab.png', text: 'We Are Builders', mcc: true },

  { id: '4nGoPfgRW2nkAp6ELx8bYRxLVRrNB3Si8drp4PRuDa3Q', imgSrc: 'media/solmap.png', text: 'Open Solmap', mcc: false },
  { id: '4SSU34nYRUi73KvMNjhruF3iScQxjQty11jh8GwGDc2x', imgSrc: 'media/portals.png', text: 'Portals', mcc: true },
  { id: '7LxjzYdvXXDMxEmjS3aBC26ut4FMtDUae44nkHBPNVWP', imgSrc: 'media/dk.png', text: 'Dead King Society Kings', mcc: true },
  { id: '4YSo5L8mA4rdgLDKK577xhsRbKVtCHLaTcQBBXyL8JXD', imgSrc: 'media/dksn.png', text: 'Dead King Society Nobles', mcc: true },
  { id: 'AuV8qcAQVnCJr6yU9go6X1VR3MAQZuiDRRS7twhq1qAU', imgSrc: 'media/frog.jpg', text: 'Froganas', mcc: false },
  { id: '8d8CYjuy79LUtUow8UeToUs4Xo35LokYRkeukhJ6uriA', imgSrc: 'media/thugbird.jpg', text: 'Thugbirdz ¬¬', mcc: false },
  { id: '5tz9iHWWHr5PRQYPzLPvUMKXFCmPNPfdx5u4cha2Gj8T', imgSrc: 'media/banx.jpg', text: 'Banx', mcc: true },
  { id: 'uKmG23zipaSra6PPMWnc1M3avmUxaH4DeK28sjxWX6k', imgSrc: 'media/bozo.jpg', text: 'Bozos collective', mcc: true },
  { id: 'F76YKLCTRanQsA5t2oKEZN8rTKMePMRKGxwHBga34fzV', imgSrc: 'media/skellies.jpg', text: 'Secret Skellies Society', mcc: true },

  { id: 'AYxotyBNGmhgL7kcsD32DvMqg9k9MDWj1N11BSoJvcbM', imgSrc: 'media/bd.png', text: 'Boryoku Dragonz', mcc: true },
  { id: 'Hx928h4TSe8DhWJftRkHVgKsbmy8fa5yjhUi2cftmjta', imgSrc: 'media/yogg.jpg', text: 'YoggDAO', mcc: true },
  { id: '5uNSvWTeGajNAYZFidfTnorQRA8cDQCZSeuSyhLtnTD2', imgSrc: 'media/plague.png', text: 'Plague', mcc: false },
  { id: '3pAx1gCrmcVFfGdVFRFaaqDEFq7ngung3nD3Q6mzs18x', imgSrc: 'media/solslugs.png', text: 'Sol Slugs', mcc: true },
  { id: '5PM8LSPLA64gxgAMhr43vCssBM8Qs1B7MqZUZ5FrViC2', imgSrc: 'media/fracture.png', text: 'The Fracture', mcc: true },
  { id: '2CNP3MVmCj5FEFja676PkvS8Rm7ZVCxdsPWkLgqHb87e', imgSrc: 'media/dc.png', text: 'Doge Capital', mcc: true },
  { id: 'LouoPer39a8x9KZ4nWXmeSFetgorr82pEErhU9EmxZW', imgSrc: 'media/cets.png', text: 'Cets', mcc: true },
  { id: '2HvN24Jc7Lgtj6CrHtWS6mLbgTWaw7s2kN4ggSEMibog', imgSrc: 'media/TombStoned.png', text: 'Tomb Stoned', mcc: true },
  { id: '51QdJmx1GvGihrkAdSsiMjS2deUe19Pyy5rUBxUJ7Cjq', imgSrc: 'media/fuddles.png', text: 'Fuddles', mcc: true },

  { id: '9p6oG4bhKLycyhbhRGscYq6GbEDPDiGqLdXrJZtm5UWP', imgSrc: 'media/gummies.jpg', text: 'Gummies', mcc: true },
  { id: 'J3ci56TKJrm3XapggRXMijNWnimPUvH6C6Yxjt2z9fBX', imgSrc: 'media/justape.jpg', text: 'Just Ape.', mcc: true },
  { id: 'JE9tjZP9nGk6WhqzW6PEsX8Epxmd7aZLXZYy23VzxnDP', imgSrc: 'media/Oligarch.png', text: 'Oligarch', mcc: true },
  { id: '86FaGSffUt6pmBEKQMqbpCTyNPjUfiF6EcE9HFzim3iT', imgSrc: 'media/OrdoNemesis.jpg', text: 'Ordo Nemesis', mcc: true },
  { id: 'H4EQ8pcE7PQSQGG1WYW4hAA1nizU6ULYipHZcYk9b64u', imgSrc: 'media/FlashTrade.jpg', text: 'Flash Trade', mcc: true },
  { id: '5f2PvbmKd9pRLjKdMr8nrK8fNisLi7irjB6X5gopnKpB', imgSrc: 'media/sharx.png', text: 'sharx by sharky.fi', mcc: true },
  { id: '1yPMtWU5aqcF72RdyRD5yipmcMRC8NGNK59NvYubLkZ', imgSrc: 'media/sagaclay.png', text: 'Claynosaurz: Call of Saga', mcc: true },
  { id: '44K6Cr5YvpZLdSrDbJmwRi74c2szTLRtvf5Gr8e5tdQc', imgSrc: 'media/GUIDES.png', text: 'GUIDES', mcc: true },
  { id: 'FKYdqgpSzhqzP8b6WRcYjFPwLSpSGU7sqVpBSgQX5WEP', imgSrc: 'media/copium.png', text: 'Copium', mcc: true },
];

window.onload = function () {
  const currentTheme = loadTheme()
  if (currentTheme === "dark-mode") {
    document.body.classList.add("dark-mode")
    document.querySelector(".switch-theme").textContent = "☀️"
  }
}

function saveTheme(theme) {
  localStorage.setItem("theme", theme)
}

function loadTheme() {
  return localStorage.getItem("theme")
}

function themeToggle() {
  const currentTheme = loadTheme()
  const switchTheme = document.querySelector(".switch-theme")

  if (currentTheme === "dark-mode") {
    document.body.classList.remove("dark-mode")
    switchTheme.textContent = "🌑"
    saveTheme("light-mode")
  } else {
    document.body.classList.add("dark-mode")
    switchTheme.textContent = "☀️"
    saveTheme("dark-mode")
  }
}

function generateCollectionBoxes(collectionBoxArray) {
  return collectionBoxArray.map(box => `
      <div class="collection-box" onclick="fillInput('${box.id}', ${box.mcc}, '${box.text}')">
          <img src="${box.imgSrc}" />
          <div class="info-box">${box.text}</div>
      </div>
  `).join('');
}

document.querySelector('.collection-grid').innerHTML = generateCollectionBoxes(collectionBoxArray);

const inputField = document.getElementById("inputField")

inputField.addEventListener("input", function () {
  document.getElementById("holderCollectionList").textContent = "Get Holderlist"
  hideJSONViewer()
})

function hideJSONViewer() {
  document.getElementById("JSON-CODE").textContent = ""
  document.querySelector(".json-container").classList.remove("visible")
}

document.getElementById("input-form").addEventListener("submit", async function (event) {
    
  event.preventDefault()

  if (event.target.elements["inputField"].value === "") return

  const retriveButton = document.querySelector('button[type="submit"]')
  retriveButton.textContent = "Retrieving Collection..."
  retriveButton.disabled = true

  const marketplace = document.getElementById("marketplace-checkbox").checked

  retriveButton.classList.add("loading-in")

  let data

  if (document.getElementById("MCC-checkbox").checked) {
    data = await fetchMCC(
      event.target.elements["inputField"].value,
      marketplace
    )
  } else {
    data = await fetchCreatorArrayCollection(
      event.target.elements["inputField"].value,
      marketplace
    )
  }

  document.getElementById("resultQTY").textContent = "Result: " + data.length

  let formattedData = JSON.stringify(data, null, 4)

  document.getElementsByTagName("code")[0].textContent = formattedData

  let codeContainer = document.querySelector(".json-container")
  codeContainer.classList.add("visible")

  retriveButton.classList.remove("loading-in")
  retriveButton.classList.add("loading-out")

  retriveButton.textContent = "Get Holderlist"

  setTimeout(() => {
    retriveButton.disabled = false
    retriveButton.classList.remove("loading-out")
  }, 1000)
})

document.querySelector(".copy-button").addEventListener("click", function () {

  let code = document.getElementsByTagName("code")[0].textContent

  navigator.clipboard.writeText(code).then(() => {
    let originalText = this.textContent
    this.textContent = "Copied!"
    setTimeout(() => (this.textContent = originalText), 2000)
  })

})

document.querySelector(".download-button").addEventListener("click", function () {
    let code = document.getElementsByTagName("code")[0].textContent
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

function fillInput(id, MCC, text) {
  document.getElementById("holderCollectionList").textContent = "Get Holderlist For: " + text
  document.getElementById("inputField").value = id
  if (MCC) {
    document.getElementById("MCC-checkbox").checked = true
  } else {
    document.getElementById("MCC-checkbox").checked = false
  }

  hideJSONViewer()
}

const fetchCreatorArrayCollection = async (creatorAddress, marketplace) => {
  let page = 1
  let mintList = []
  let holderList = []
  let noMarketplaceHolderList = []

  while (page) {
    const response = await fetch(secureRPC, {
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

const fetchMCC = async (creatorAddress, marketplace) => {
  let page = 1
  let mintList = []
  let holderList = []
  let noMarketplaceHolderList = []

  while (page) {
    const response = await fetch(secureRPC, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "my-id",
        method: "getAssetsByGroup",
        params: {
          groupKey: 'collection',
          groupValue: creatorAddress,
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
