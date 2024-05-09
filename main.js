import { ERRORS, hideError, renderError } from "./src/utils";

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
    const ipError = ERRORS.find((error) => error.id === e.target.id);
    if (!ipError.validate(e.target.value)) renderError(e.target, ipError.msg);
    else hideError(e.target);
  });
});
