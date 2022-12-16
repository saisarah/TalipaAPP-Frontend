import { useState } from "react";
import { RegisterContextProvider } from "../../contexts/RegistrationContext";
import ChooseAccountType from "./forms/ChooseAccountType";
import RegistrationForm from "./RegistrationForm";

export default function Register() {
  const [accountType, setAccountType] = useState(null);

  return (
    <RegisterContextProvider>
      <div className="mx-auto min-h-screen max-w-md bg-white">
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
