export const ERRORS = [
  {
    id: "name",
    msg: "Please enter your full name.",
    validate(val) {
      return val.length > 6 && val.includes(" ");
    },
  },
  { id: "email", msg: "Please enter a valid email address." },
  { id: "phone", msg: "Please enter a valid phone number." },
  {
    id: "textbox",
    msg: "please enter a message between 10 and 100 characterx.",
  },
];

export const hideError = (ip) => {
  ip.parentNode.querySelector(".error").classList.remove("is-error");
};
export const renderError = (ip, msg) => {
  const ipParent = ip.parentNode;
  const errorIp = ip.parentNode.querySelector(".error");

  if (errorIp) errorIp.classList.add("is-error");
  else {
    const errorElement = document.createElement("p");
    errorElement.className = "error is-error";
    errorElement.textContent = msg;
    ipParent.appendChild(errorElement);
  }
};
