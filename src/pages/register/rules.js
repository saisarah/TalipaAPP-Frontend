export const rules = {
    firstname: [
      { required: true, message: "Please enter your firstname" },
      { min: 2, message: "Your first name must have at least contain 2 characters" },
      { pattern: /^[a-z ,.'-]+$/i, message: "Please enter a valid name" },
    ],
    middlename: [
      {
        min: 2,
        message: "Your middle name must have at least contain 2 characters",
      },
      { pattern: /^[a-z ,.'-]+$/i, message: "Please enter a valid name" },
    ],    
    lastname: [
        { required: true, message: "Please enter your lastname" },
        { min: 2, message: "Your last name must have at least contain 2 characters" },
        { pattern: /^[a-z ,.'-]+$/i, message: "Please enter a valid name" },
    ],
    phone: [
        { required: true, message: "Please enter your phone number" },
        { len: 10, message: "Please enter 10 digit phone number" },
        { pattern: /^[0-9]*$/, message: "Please enter a valid phone number"}
    ],
    email: [
        { type: 'email', message: "Please enter a valid email address"}
    ]
  };
