export const reset = {
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

  password_confirmation: [
    { required: true, message: "Please confirm your password." },
    ({ getFieldValue }) => ({
      validator: async (_, value) => {
        if (!value || getFieldValue("password") === value) {
          return;
        }
        throw new Error("The two password you entered does not match");
      },
    }),
  ],
};
