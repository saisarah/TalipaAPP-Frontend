export const required = (message = "This field is required") => {
  return [
    {
      required: true,
      message,
    },
  ];
};

export const rules = {
  commodity: [{ required: true, message: "Please select a commodity" }],
  quantity: [{ required: true, message: "Please spcify the quantity you needed" }],
  budget: [{ required: true, message: "Please specify your budget for this commodity" }],
};
