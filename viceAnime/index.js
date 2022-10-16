const showBtn = document.getElementById('showBtn')
const nextBtn = document.getElementById('nextBtn')
const animeImg = document.getElementById('animeImg')
const adviceLine = document.getElementById('adviceLine')
const artistName = document.getElementById('artistName')

async function getPageData() {
    const responses = await Promise.all([fetch('https://nekos.best/api/v2/neko'), fetch('https://api.adviceslip.com/advice')])
    const data1 = await responses[0].json()
    const data2 = await responses[1].json()
    animeImg.src = data1.results[0].url
    artistName.innerHTML = `artist: ${data1.results[0].artist_name}`
    adviceLine.innerHTML = data2.slip.advice
    console.log(data1.results[0])
    console.log(data2)
    console.log(this.id)
    if(this.id === 'showBtn'){
        document.getElementById('mainPage').style.display = 'block'
        this.style.display = 'none'
    }
}

showBtn.addEventListener('click', getPageData)
nextBtn.addEventListener('click', getPageData)