import { ERRORS } from "./src/utils";

console.log(ERRORS);

const formInputs = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#textbox"),
];
console.log(formInputs);

const formButtons = [...Array.from(document.querySelectorAll("button"))];
console.log(formButtons);

formInputs.forEach((ip) => {
  ip.addEventListener("blur", (e) => {
    console.log(
      ERRORS.find((error) => error.id === e.target.id).validate(e.target.value),
    );
  });
});
