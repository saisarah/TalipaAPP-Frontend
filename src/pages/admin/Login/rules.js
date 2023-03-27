export const rules = {
    email: [
        { type: "email", message: "Please enter a valid email address" },
        {
          max: 255,
          message: "Your email should be maximun of 255 characters only",
        },
      ],
}