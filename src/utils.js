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
