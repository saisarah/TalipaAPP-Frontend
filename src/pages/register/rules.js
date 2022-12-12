import axios from "axios";
import { validateData } from "../../apis/AuthApi";
import { asyncWrapper } from "../../helpers/utils";

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
        { pattern: /^[0-9]*$/, message: "Please enter a valid phone number"},
        () => ({
            validator: async(_, phone) => {
                try {
                    await validateData({phone});
                } catch (e) {
                    if (e?.response.status === 422)
                        throw new Error(e.response.data.message)
                    throw new Error('An error occurred while validating, please try again')
                }
            }
        })
    ],
    email: [
        { type: 'email', message: "Please enter a valid email address"},
        () => ({
            validator: async(_, email) => {
                try {
                    await validateData({email});
                } catch (e) {
                    if (e?.response.status === 422)
                        throw new Error(e.response.data.message)
                    throw new Error('An error occurred while validating, please try again')
                }
            }
        })
    ],
    region: [
        { required: true, message: "Please select your region" },
    ],
    province: [
        { required: true, message: "Please select your province" },
    ],
    city: [
        { required: true, message: "Please select your city" },
    ],
    barangay: [
        { required: true, message: "Please select your barangay" },
    ],
    street: [
        { required: true, message: "Please enter your street" },
    ],
    house_number: [
        { required: true, message: "Please enter your house number" },
    ]
  };
