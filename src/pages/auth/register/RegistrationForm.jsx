import { ArrowLeftOutlined, LeftOutlined } from "@ant-design/icons";
import { Button, Steps } from "antd";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../farmer/components/PageHeader";
import {
  RegistrationContext,
  useRegistrationContext,
} from "../../../contexts/RegistrationContext";
import AddressForm from "./forms/AddressForm";
import CropSelection from "./forms/CropsSelection";
import FarmInformation from "./forms/FarmInformation";
import PersonalInformationForm from "./forms/PersonalInformationForm";
import { VendorInformation } from "./forms/VendorInformation";
import { VerificationForm } from "./forms/VerificationForm";

const vendorSteps = [
  { title: "Personal Information", form: <PersonalInformationForm /> },
  { title: "Address", form: <AddressForm /> },
  { title: "Vendor Information", form: <VendorInformation /> },
  { title: "Verification", form: <VerificationForm /> },
];
const farmerSteps = [
  { title: "Personal Information", form: <PersonalInformationForm /> },
  { title: "Address", form: <AddressForm /> },
  { title: "Farm Information", form: <FarmInformation /> },
  { title: "Verification", form: <VerificationForm /> },
];

export default function RegistrationForm({ accountType, reset }) {
  const { step, setStep, setData } = useRegistrationContext();
  const { form } =
    accountType === "farmer" ? farmerSteps[step] : vendorSteps[step];

  return (
    <>
      <PageHeader
        left={
          <button
            onClick={() => {
              setStep(0);
              setData({});
              reset();
            }}
          >
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
        {form}
      </div>
    </>
  );
}