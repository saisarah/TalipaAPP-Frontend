import axios from "axios";
import { validateData } from "../../../apis/AuthApi";
import { asyncWrapper } from "../../../helpers/utils";

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
    password: [
        { required: true, message: 'Password is required.' },
        { min: 8, message: 'Password must be atleast 8 characters.'},
        { pattern: /^(?=.*?[0-9]).{0,}$/, message: 'Password must contain a number.' },
        { pattern: /^(?=.*?[a-z]).{0,}$/, message: 'Password must contain a lowercase letter.' },
        { pattern: /^(?=.*?[A-Z]).{0,}$/, message: 'Password must contain an uppercase letter.' } //Must have letter and number
    ],

    password_confirmation: [
        { required: true, message: 'Please confirm your password.' },
        ({ getFieldValue  }) => ({
            validator: async(_, value) => {
                if (!value || getFieldValue('password') === value) {
                    return
                }
                throw new Error('The two password you entered does not match')
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
    ],
    farm_area: [
        { required: true, message: "Please enter your farm area" },
    ],
    farm_type: [
        { required: true, message: "Please select your farm type" },
    ],
    ownership_type: [
        { required: true, message: "Please enter your ownership type" },
    ],
    crops: [
        { required: true, message: "Please select your crops" },
    ],
    terms: [
        { required: true, message: "Please check the box" },
    ],
  };
