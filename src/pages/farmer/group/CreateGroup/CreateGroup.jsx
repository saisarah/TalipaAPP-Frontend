import PageHeader from "@/components/PageHeader/PageHeader";
import { useState } from "react";
import GroupInfoForm from "./components/GroupInfoForm";
import SearchGroup from "./components/SearchGroup";

export default function CreateGroup() {
  const [step, setStep] = useState(0);

  return (
    <div className="app-size bg-white">
      <PageHeader back="/farmer/groups" title="Create Group" />

      {step === 0 && <GroupInfoForm setStep={setStep} />}
      {step === 1 && <SearchGroup setStep={setStep} />}
    </div>
  );
}
