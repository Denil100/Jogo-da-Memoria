const cards = document.querySelectorAll('.card');
let hasFlipperCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');
    if(hasFlipperCard) {
        hasFlipperCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlipperCard = false;
    chechForMatch();
}

function chechForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }

    unflipCards();
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})