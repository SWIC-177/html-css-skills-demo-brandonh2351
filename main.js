const formInputs = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#textbox"),
];
console.log(formInputs);

const formButtons = [...Array.from(document.querySelectorAll("button"))];
console.log(formButtons);

formInputs.forEach((ip) => {
  ip.addEventListener("blur", (e) => {
    console.log("blur event", e.target.id);
  });
});
