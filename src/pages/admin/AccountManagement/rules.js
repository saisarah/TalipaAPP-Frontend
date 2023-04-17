export const rules = {
  firstname: [
    { required: true, message: "Please enter your firstname" },
    {
      min: 2,
      message: "Your first name must have at least contain 2 characters",
    },
    {
      max: 64,
      message: "Your first name should be maximun of 64 characters only",
    },
    { pattern: /^[a-z ,.'-]+$/i, message: "Please enter a valid name" },
  ],
  lastname: [
    { required: true, message: "Please enter your lastname" },
    {
      min: 2,
      message: "Your last name must have at least contain 2 characters",
    },
    {
      max: 64,
      message: "Your last name should be maximun of 64 characters only",
    },
    { pattern: /^[a-z ,.'-]+$/i, message: "Please enter a valid name" },
  ],
  phone: [
    { required: true, message: "Please enter your phone number" },
    { len: 10, message: "Please enter 10 digit phone number" },
    {
      pattern: /^9[0-9]*$/,
      message: "Please enter a valid phone number starting with 9",
    },
  ],
  age: [
    { required: true, message: "Please enter your age" },
    { max: 3, message: "Please enter correct age number" },
  ],
  email: [
    { type: "email", message: "Please enter a valid email address" },
    {
      max: 255,
      message: "Your email should be maximun of 255 characters only",
    },
  ],
  password: [
    { required: true, message: "Password is required." },
    { min: 8, message: "Password must be atleast 8 characters." },
    {
      pattern: /^(?=.*?[0-9]).{0,}$/,
      message: "Password must contain a number.",
    },
    {
      pattern: /^(?=.*?[a-z]).{0,}$/,
      message: "Password must contain a lowercase letter.",
    },
    {
      pattern: /^(?=.*?[A-Z]).{0,}$/,
      message: "Password must contain an uppercase letter.",
    }, //Must have letter and number
  ],
}