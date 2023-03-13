export const rules = {
  name: [
    { required: true, message: "Please enter your name" },
    {
      min: 2,
      message: "Your first name must have at least contain 2 characters",
    },
    { pattern: /^[a-z ,.'-]+$/i, message: "Please enter a valid name" },
  ],
}