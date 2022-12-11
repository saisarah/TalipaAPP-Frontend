import { ArrowLeftOutlined, LeftOutlined } from "@ant-design/icons";
import { Button, Steps } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import AddressForm from "./forms/AddressForm";
import PersonalInformationForm from "./forms/PersonalInformationForm";

export default function RegistrationForm({ reset }) {
  const [step, setStep] = useState(0);

  return (
    <>
      <PageHeader
        left={
          <button onClick={() => reset()}>
            <ArrowLeftOutlined />
          </button>
        }
        title="Create your Account"
      />
      <div className="p-4">
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
