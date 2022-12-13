import { ArrowLeftOutlined, LeftOutlined } from "@ant-design/icons";
import { Button, Steps } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import AddressForm from "./forms/AddressForm";
import CropSelection from "./forms/CropsSelection";
import FarmInformation from "./forms/FarmInformation";
import PersonalInformationForm from "./forms/PersonalInformationForm";

const vendorSteps = [{ title: "Personal Information" }, { title: "Address" }];
const farmerSteps = [
  { title: "Personal Information" },
  { title: "Address" },
  { title: "Farm Information" },
];

export default function RegistrationForm({ accountType, reset }) {
  const [step, setStep] = useState(0);
  const [personalInformationData, setPersonalInformationData] = useState({});
  const [addressData, setAddressData] = useState({});
  const [farmInformationData, setFarmInformationData] = useState({});

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
        {step === 0 && (
          <PersonalInformationForm
            personalInformationData={personalInformationData}
            setPersonalInformationData={setPersonalInformationData}
            setStep={setStep}
          />
        )}
        {step === 1 && (
          <AddressForm
            addressData={addressData}
            setAddressData={setAddressData}
            setStep={setStep}
          />
        )}

        {step === 2 && (
          <FarmInformation
            addressData={addressData}
            personalInformationData={personalInformationData}
            farmInformationData={farmInformationData}
            setFarmInformationData={setFarmInformationData}
            setStep={setStep}
          />
        )}
      </div>
    </>
  );
}
