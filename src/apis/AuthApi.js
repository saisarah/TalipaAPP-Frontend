import Http from "../helpers/Http";

// Credentials must contain contact_number and password
export const login = async (credentials) => {
  const { data } = await Http.post("/login", {
    ...credentials,
    device_name: "TalipaAPP FrontEnd",
  });
  return data;
};

export const sendLoginOtp = async (contact_number) => {
  const { data } = await Http.post("/login/send-otp", { contact_number });
  return data;
};

export const sendRegisterOtp = async (contact_number) => {
  const { data } = await Http.post("/register/send-otp", { contact_number });
  return data;
};

export const sendForgotPasswordOtp = async (contact_number) => {
  const { data } = await Http.post("/forgot-password", { contact_number })
  return data
}

export const verifyForgotPasswordOtp = async ({contact_number, code}) => {
  const { data } = await Http.post("/forgot-password/verify", { contact_number, code });
  return data
}

export const resetPassword = async ({contact_number, code, password, password_confirmation}) => {
  const { data } = await Http.patch('/forgot-password/reset', {
    contact_number,
    code,
    password,
    password_confirmation
  })
  return data
}

export const verifyLoginOtp = async ({ contact_number, code }) => {
  const { data } = await Http.post("/login/verify-otp", {
    contact_number,
    code,
    device_name: "TalipaAPP FrontEnd",
  });
  return data;
};

export const validateData = async (data) => {
  await Http.post("/register/validator", data);
};

export const farmerRegister = async (_data) => {
  const { data } = await Http.post("/register/farmer", _data);
  return data;
};

export const vendorRegister = async (_data) => {
  const { data } = await Http.post("/register/vendor", _data);
  return data;
};
