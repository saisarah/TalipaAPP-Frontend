export const required = (message = "This field is required") => {
    return [
        {
            required: true,
            message
        }
    ]
}


export const rules = {
    commodity: [
        { required: true, message: "Please select a commodity"}
    ],
    unit: [
        { required: true, message: "Please select a unit"}
    ],
    pricingtype: [
        { required: true, message: "Please select a pricing type"}
    ],
    totalstocks: [
        { required: true, message: "Please select a total stocks"}
    ],
    price: [
        { required: true, message: "Please select a price"}
    ]
}   