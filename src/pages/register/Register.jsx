import { useState } from "react";
import ChooseAccountType from "./ChooseAccountType";
import RegistrationForm from "./RegistrationForm";


export default function Register() {
  const [accountType, setAccountType] = useState(null);

  return (
    <div className="mx-auto min-h-screen max-w-md bg-white">
      {accountType === null ? (
        <ChooseAccountType setAccountType={setAccountType} />
      ) : (
        <RegistrationForm reset={() => setAccountType(null)} />
      )}
    </div>
  );
}
