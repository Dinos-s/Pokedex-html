const temaEscuro = document.getElementById('dark-mode')
const body = document.querySelector('body')
const trocaImagemBTN = document.querySelector('.img-btn')

temaEscuro.addEventListener('click', ()=>{
    const darkModeActive = body.classList.contains('dark-mode')

    body.classList.toggle('dark-mode')
    
    if (darkModeActive) {
        // trocando o lua pelo sol
        trocaImagemBTN.setAttribute('src', './img/sun.png')
    } else {
        //trocando o sol pela lua
        trocaImagemBTN.setAttribute('src', './img/moon.png')
    }
})
