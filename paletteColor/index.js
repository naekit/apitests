const C1 = document.getElementById('1')
const O2 = document.getElementById('2')
const L3 = document.getElementById('3')
const O4 = document.getElementById('4')
const R5 = document.getElementById('5')
const refresh = document.querySelectorAll('.click')

const colors = [C1, O2, L3, O4, R5]

for (let i = 0; i < refresh.length; i++){
    refresh[i].addEventListener('click', getColors)
}

colors.forEach(color => {
    return color.addEventListener('click', () => {
        fetch("http://www.colourlovers.com/api/colors/random?format=json")
            .then(res => res.json())
            .then(data => {
                color.style.color = `#${data[0].hex}`
                color.querySelector('p').innerHTML = `<p>#${data[0].hex}</p>`
            })
    })
});


function getColors(){
    fetch("http://www.colourlovers.com/api/palettes/random?format=json")
    .then(res => res.json())
    .then(data => {
        let paletteColors = data[0].colors.map(x => `#${x}`)
        if(paletteColors.length != 5){
            getColors()
        }
        for(let i = 0; i < colors.length; i++){
            colors[i].style.color = paletteColors[i]
            let p = colors[i].querySelector('p')
            p.innerHTML = `<p>${paletteColors[i]}</p>`
        }
    })
    .catch(err => console.log(err))
}

getColors()