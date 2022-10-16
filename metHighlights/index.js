const picDisplay = document.getElementById('picDisplay')
const artistName = document.getElementById('artistName')
const title = document.getElementById('title')
const paintBio = document.getElementById('paintBio')
const credit = document.getElementById('credit')
const highLights = []


document.body.addEventListener('click', getHighlight)

async function delay(ms){
    return await new Promise(resolve => setInterval(resolve, ms))
}

const picTimer = async () => {
    await delay(5000);
    getHighlight();
}

async function getHighlight(){
    console.log(highLights)
    let pic = highLights[0][Math.floor(Math.random() * highLights[0].length)]
    console.log(pic)
    const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${pic}`)
    const data = await res.json()
    
    if(data.primaryImageSmall){
        picDisplay.src = data.primaryImageSmall
        artistName.innerHTML = data.artistDisplayName
        title.innerHTML = data.title
        paintBio.innerHTML = data.artistDisplayBio
        credit.innerHTML = data.creditLine
    } else {
        getHighlight()
    }
}

async function allHighlights(){
    const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=isHighlight`)
    const data = await res.json()
    console.log(data.objectIDs)
    highLights.push(data.objectIDs)
}


allHighlights()