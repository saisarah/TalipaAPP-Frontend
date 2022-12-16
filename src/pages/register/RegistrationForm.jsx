import { ArrowLeftOutlined, LeftOutlined } from "@ant-design/icons";
import { Button, Steps } from "antd";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import {
  RegistrationContext,
  useRegistrationContext,
} from "../../contexts/RegistrationContext";
import AddressForm from "./forms/AddressForm";
import CropSelection from "./forms/CropsSelection";
import FarmInformation from "./forms/FarmInformation";
import PersonalInformationForm from "./forms/PersonalInformationForm";
import { VerificationForm } from "./forms/VerificationForm";

const vendorSteps = [{ title: "Personal Information" }, { title: "Address" }];
const farmerSteps = [
  { title: "Personal Information" },
  { title: "Address" },
  { title: "Farm Information" },
  { title: "Verification" },
];

export default function RegistrationForm({ accountType, reset }) {
  const { step } = useRegistrationContext();

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
          items={accountType === "farmer" ? farmerSteps : vendorSteps}
          size="small"
          className="mb-8"
          current={step}
          type="inline"
        />
        {step === 0 && <PersonalInformationForm />}
        {step === 1 && <AddressForm />}
        {step === 2 && <FarmInformation />}
        {step === 3 && <VerificationForm />}
      </div>
    </>
  );
}
