function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input[type="number"]')
const create = document.querySelector('button[data-create]')
const destroy = document.querySelector('button[data-destroy]')
const box = document.querySelector("#boxes");

let sizes = 30;

create.addEventListener("click", createMarkup);
destroy.addEventListener("click", handleDestroy);

function createMarkup () {
  if (Number(input.value) < 1 || Number(input.value) > 100) {
    console.log("error");
    return;  
  }
  createBoxes(+input.value);
  input.value = "";
}

function handleDestroy() {
  box.innerHTML = "";
  input.value = "";
  sizes = 30;
}

function createBoxes(amount) {
  box.innerHTML = "";
  sizes = 30;

  const arr = [];

  for (let i = 0; i < amount; i++) {
    const myBox = document.createElement("div");
    myBox.style.width = `${sizes}px`;
    myBox.style.height = `${sizes}px`;
    myBox.style.backgroundColor = getRandomHexColor();

    arr.push(myBox);
    sizes += 10;
  }
  box.append(...arr);
}