const inputElm = document.querySelector("#name-input");
const outputElm = document.querySelector("#name-output");

function updateOutput(event) {
  const inputValue = event.target.value.trim();
  outputElm.textContent = inputValue.length > 0 ? inputValue : "Anonymous";
}
inputElm.addEventListener("input", updateOutput);
