const increaseButton = document.querySelector('.arttir');
const decreaseButton = document.querySelector('.azalt');
const number = document.querySelector(".numara");

let initialNumber = 0;

increaseButton.addEventListener('click', () => {
    initialNumber++;
    number.innerHTML = `<i>${initialNumber}</i>`;
});

decreaseButton.addEventListener('click', () => {
    initialNumber--;
    number.innerHTML = `<i>${initialNumber}</i>`;
});
