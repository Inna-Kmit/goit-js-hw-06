let counterValue = 0;
const countValue = document.querySelector("#value");
const btnDecrement = document.querySelector(`[data-action="decrement"]`);
const btnIncrement = document.querySelector(`[data-action="increment"]`);


btnDecrement.addEventListener(`click`,(e) => {
    counterValue -= 1;
    countValue.textContent = counterValue;
});
btnIncrement.addEventListener(`click`,(e) => {
    counterValue += 1;
    countValue.textContent = counterValue;
});

