
/* <div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div> */
const btnEl = document.querySelector(`.change-color`);

const spanEl = document.querySelector(`.color`);

const bodyEl = document.querySelector(`body`);

btnEl.addEventListener (`click`, onbtnEl);

function onbtnEl (event) {
  event.preventDefault();
  const randomColorEl = getRandomHexColor();
  spanEl.textContent = randomColorEl;
  body.style.backgroundColor = randomColorEl;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
