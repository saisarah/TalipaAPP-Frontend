import { resetPassword } from "@/apis/AuthApi";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { getErrorMessage } from "@/helpers/Http";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import secureLoginImg from "./images/secure_login.svg";

const rules = {
  password: [
    { required: true, message: "Password is required." },
    { min: 8, message: "Password must be atleast 8 characters." },
    {
      pattern: /^(?=.*?[0-9]).{0,}$/,
      message: "Password must contain a number.",
    },
    {
      pattern: /^(?=.*?[a-z]).{0,}$/,
      message: "Password must contain a lowercase letter.",
    },
    {
      pattern: /^(?=.*?[A-Z]).{0,}$/,
      message: "Password must contain an uppercase letter.",
    }, //Must have letter and number
  ],

  password_confirmation: [
    { required: true, message: "Please confirm your password." },
    ({ getFieldValue }) => ({
      validator: async (_, value) => {
        if (!value || getFieldValue("password") === value) {
          return;
        }
        throw new Error("The two password you entered does not match");
      },
    }),
  ],
}

export default function ResetPassword({ code, contact_number, resetNumber }) {

  const navigate = useNavigate()

  const { mutate, isLoading } = useMutation(resetPassword, {
    onSuccess() {
      notification.success({ message: "Password Changed Successfully." })
      navigate("/login");
    },
    onError(err) {
      notification.error({ message: getErrorMessage(err) });
    },
  });

  const handleSubmit = ({ password, password_confirmation }) => {
    if (isLoading) return;
    mutate({
      code,
      contact_number,
      password,
      password_confirmation,
    });
  };

  return (
    <Page className="bg-white">
      <PageHeader back onBack={resetNumber} title="Create New Password" />
      <div className="flex flex-col items-center p-8">
        <div className="flex aspect-square w-1/2 items-center justify-center rounded-full bg-green-500/10 p-8">
          <img className="" src={secureLoginImg} />
        </div>

        <span className="mt-8 text-center text-lg font-medium">
          You Can Now Create Your New Password
        </span>

        <Form onFinish={handleSubmit} layout="vertical" className="mt-8 w-full">
          <Form.Item rules={rules.password} name="password" label="New Password">
            <Input.Password size="large" className="rounded" />
          </Form.Item>
          <Form.Item rules={rules.password_confirmation} name="password_confirmation" label="Re Enter New Password">
            <Input.Password size="large" className="rounded" />
          </Form.Item>

          <Button
            loading={isLoading}
            htmlType="submit"
            shape="round"
            className="mt-8"
            type="primary"
            size="large"
            block
          >
            Save
          </Button>
        </Form>
      </div>
    </Page>
  );
}
