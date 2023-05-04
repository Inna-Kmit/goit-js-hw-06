
// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputEl = document.querySelector(`#font-size-control`);

const spanEl = document.querySelector(`#text`);

inputEl.addEventListener(`input`, (event) => {
spanEl.style.fontSize = `${event.currentTarget.value}px`
});
