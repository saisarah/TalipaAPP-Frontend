import { farmerRegister, vendorRegister } from "@/apis/AuthApi";
import { useMutation } from "@tanstack/react-query";

export const useRegistration = (accountType, option) => {
  const mutationFn = accountType === "farmer" ? farmerRegister : vendorRegister;
  return useMutation(mutationFn, option);
};
