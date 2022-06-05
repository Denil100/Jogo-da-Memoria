const cards = document.querySelectorAll('.card');

function flipcard() {
    this.classlist.toggle('flip')
}

cards.forEach[(card) => {
    card.addEventListener('click', flipcard)
}]