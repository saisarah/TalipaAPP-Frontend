import { useContext, useState } from "react";
import { createContext } from "react";

export const RegistrationContext = createContext({});

export const useRegistrationContext = () => {
  return useContext(RegistrationContext);
};

export function RegisterContextProvider({ accountType, children }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const [personalInformationData, setPersonalInformationData] = useState({});
  const [addressData, setAddressData] = useState({});
  const [farmInformationData, setFarmInformationData] = useState({});

  const value = {
    accountType,
    step,
    setStep,
    personalInformationData,
    setPersonalInformationData,
    addressData,
    setAddressData,
    farmInformationData,
    setFarmInformationData,
    data,
    setData,
  };

  return (
    <RegistrationContext.Provider value={value}>
      {children}
    </RegistrationContext.Provider>
  );
}
