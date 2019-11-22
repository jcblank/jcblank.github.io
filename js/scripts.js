const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card1')



for (let card of cards) {
    card.addEventListener("click", function(){
        const fotoId = card.getAttribute("id")
        // const titId = card.getElementsByTagName("h3")
        // const textId = = card.getElementsByTagName("p")
        modalOverlay.classList.add('active') 
        modalOverlay.querySelector("img").src = `/Desafio02/img/${fotoId}.png`
        modalOverlay.querySelector(".modal-content h3").innerHTML = card.querySelector(".card1 p").textContent;
        modalOverlay.querySelector(".modal-content p").innerHTML = card.querySelector(".card1 h3").textContent;
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})

