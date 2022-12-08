import { LeftOutlined } from "@ant-design/icons";
import { Button, Steps } from "antd";
import { useState } from "react";
import AddressForm from "./AddressForm";
import PersonalInformationForm from "./PersonalInformationForm";


export default function RegistrationForm({ reset }) {
  const [step, setStep] = useState(0);

  return (
    <>
      <div className="p-4">
        <div className="mb-6 flex items-center">
          <Button type="text" onClick={reset} icon={<LeftOutlined />} />
          <div className="text-2xl font-bold">Create Your Account</div>
        </div>
        <Steps
          items={[{ title: "Personal Information" }, { title: "Address" }]}
          size="small"
          className="mb-8"
          current={step}
          direction="vertical"
        />
        {step === 0 && <PersonalInformationForm setStep={setStep} />}
        {step === 1 && <AddressForm />}
      </div>
    </>
  );
}
