const btn = document.querySelector('#btn')
const container = document.querySelector('.container')

loadEventListeners()

function loadEventListeners() {
    btn.addEventListener('click', getData)
}

async function getData() {
    const res = await fetch('https://obscure-temple-03891.herokuapp.com/api/students')
    const data = await res.json()
    paintScreen(data)
}

function paintScreen(data) {
    for(let i = 0; i < data.length; i++) {
        let current = data[i]
        const div = document.createElement('div')
        div.textContent = current.name
        container.appendChild(div)
    }
}