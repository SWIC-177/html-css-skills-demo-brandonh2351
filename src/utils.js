import validator from "validator";

export const ERRORS = [
  {
    id: "option1",
    validate: (value) => {
      // Example validation rule: At least one checkbox must be checked
      return (
        document.querySelectorAll('input[type="checkbox"]:checked').length > 0
      );
    },
    msg: "Please select at least one option.",
  },
  {
    id: "option2",
    validate: (value) => {
      // Example validation rule: At least one checkbox must be checked
      return (
        document.querySelectorAll('input[type="checkbox"]:checked').length > 0
      );
    },
    msg: "Please select at least one option.",
  },
  {
    id: "option3",
    validate: (value) => {
      // Example validation rule: At least one checkbox must be checked
      return (
        document.querySelectorAll('input[type="checkbox"]:checked').length > 0
      );
    },
    msg: "Please select at least one option.",
  },
  {
    id: "option4",
    validate: (value) => {
      // Example validation rule: At least one checkbox must be checked
      return (
        document.querySelectorAll('input[type="checkbox"]:checked').length > 0
      );
    },
    msg: "Please select at least one option.",
  },

  {
    id: "name",
    msg: "Please enter your full name.",
    validate(val) {
      return val.length > 6 && val.includes(" ");
    },
  },
  {
    id: "email",
    msg: "Please enter a valid email address.",
    validate(val) {
      return validator.isEmail(val);
    },
  },
  {
    id: "phone",
    msg: "Please enter a valid phone number.",
    validate(val) {
      return validator.isMobilePhone(val, "en-US");
    },
  },
  {
    id: "textbox",
    msg: "please enter a message between 10 and 100 characters.",
    validate(val) {
      return val.length >= 10 && val.length <= 100;
    },
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
