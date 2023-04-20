import { createPost } from "@/apis/PostApi";
import Page from "@/components/Page";
import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import PageHeader from "@/components/PageHeader/PageHeader";
import { getErrorMessage } from "@/helpers/Http";
import { QuestionCircleTwoTone } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { App, Steps } from "antd";
import { toFormData } from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";

export default function CreatePost() {
  const { modal, notification } = App.useApp()
  const navigate = useNavigate();

  const { mutateAsync } = useMutation(createPost, {
    onSuccess(data) {
      notification.success({ message: "Post Created Successfully." });
      navigate(`/farmer/posts/${data.id}`, { replace: true });
    },
    onError(error) {
      notification.error({ message: getErrorMessage(error) });
    },
  });
  const [step, setStep] = useState(0);
  const formData = useRef({
    crop_id: null,
    title: "",
    caption: "",
    unit: "kg",
    prices: [],
    attachments: [],
  });

  const handleSubmit = () => {
    modal.confirm({
      icon: <QuestionCircleTwoTone />,
      title: "Are all the details you entered is correct?",
      async onOk() {
        const data = toFormData(formData.current); ///
        await mutateAsync(data);
      },
    });
  };

  return (
    <Page className="bg-white">
      <FarmerPageHeader back="/farmer/home?tab=create" title="Create Post" />

      <div className="border-b">
        <Steps
          responsive={false}
          className=""
          onChange={(n) => setStep((step) => Math.min(n, step))}
          size="small"
          current={step}
          type="navigation"
          items={[
            { title: "Step 1" },
            { title: "Step 2" },
            { title: "Step 3" },
          ]}
        />
      </div>

      <div className="max-w-screen flex overflow-x-hidden md:overflow-hidden">
        <Form1 step={step} setStep={setStep} formData={formData.current} />
        <Form2 step={step} setStep={setStep} formData={formData.current} />
        <Form3
          step={step}
          onSubmit={handleSubmit}
          formData={formData.current}
        />
      </div>
    </Page>
  );
}
