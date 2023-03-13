import PageHeader from "@/components/PageHeader";
import { useRegistrationContext } from "@/contexts/RegistrationContext";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Steps } from "antd";
import AddressForm from "./forms/AddressForm";
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
        title="Register"
      />
      <div className="px-6 py-2 overflow-x-auto no-scrollbar">
        <Steps
          responsive={false}
          items={accountType === "farmer" ? farmerSteps : vendorSteps}
          size="small"
          className="gap-8"
          current={step}
          type="navigation"
        />
      </div>

      <div className="p-4">
        {form}
      </div>
    </>
  );
}
