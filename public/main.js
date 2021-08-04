const btn = document.querySelector('#btn')

loadEventListeners()

function loadEventListeners() {
    btn.addEventListener('click', () => {
        const res = fetch('https://obscure-temple-03891.herokuapp.com/api/students')
        console.log(res.json())
    })
}