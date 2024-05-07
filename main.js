const formInputs = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#textbox"),
];
console.log(formInputs);

const formButtons = [...Array.from(document.querySelectorAll("button"))];
console.log(formButtons);
