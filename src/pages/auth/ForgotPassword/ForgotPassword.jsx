import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { Button, Form, InputNumber } from "antd";
import { useState } from "react";
import ForgotPasswordCode from "./ForgotPasswordCode";

export default function ForgotPassword() {
  const [number, setNumber] = useState(null);

  const handleSubmit = (data) => {
    setNumber(data.number);
  };

  if (number !== null) return <ForgotPasswordCode />;

  return (
    <Page className="bg-white">
      <PageHeader back="/login" title="TalipaAPP" />

      <Form className="p-4" onFinish={handleSubmit}>
        <h2 className="text-xl font-bold ">Forgot Password</h2>
        <div className="mt-6 flex flex-col">
          <span>Enter your number for the verification process,</span>
          <span>We will send 6 digits code to your number.</span>
        </div>

        <Form.Item
          name="number"
          className="mt-6"
          rules={[
            {
              required: true,
              message: "Please input a valid number",
            },
          ]}
        >
          <InputNumber
            addonBefore="+63"
            className="w-full rounded"
            required
            minLength={10}
            maxLength={10}
            size="large"
          />
        </Form.Item>

        <Button
          htmlType="submit"
          size="large"
          className="mt-6 rounded"
          block
          type="primary"
        >
          Continue
        </Button>
      </Form>
    </Page>
  );
}
