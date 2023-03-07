import { RegisterContextProvider } from "@/contexts/RegistrationContext";
import { useState } from "react";
import ChooseAccountType from "./forms/ChooseAccountType";
import RegistrationForm from "./RegistrationForm";

export default function Register() {
  const [accountType, setAccountType] = useState(null);

  return (
    <RegisterContextProvider accountType={accountType}>
      <div className="app-size bg-white">
        {accountType === null ? (
          <ChooseAccountType setAccountType={setAccountType} />
        ) : (
          <RegistrationForm
            accountType={accountType}
            reset={() => setAccountType(null)}
          />
        )}
      </div>
    </RegisterContextProvider>
  );
}
