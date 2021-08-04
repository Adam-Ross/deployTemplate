const btn = document.querySelector('#btn')

loadEventListeners()

function loadEventListeners() {
    btn.addEventListener('click', getData)
}

async function getData() {
    const res = await fetch('https://obscure-temple-03891.herokuapp.com/api/students');
    const data = await res.json()
    console.log(data)
}

