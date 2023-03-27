import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import messageSendImg from "./images/message_send.svg";
import OTPInput from "otp-input-react";
import { useState } from "react";
import { Button, notification } from "antd";
import { useMutation } from "@tanstack/react-query";
import { verifyForgotPasswordOtp } from "@/apis/AuthApi";
import { getErrorMessage } from "@/helpers/Http";
import ResetPassword from "./RessetPassword";

export default function VerifyNumber({
  number,
  resetNumber,
  resend,
  throttle,
  isLoading,
}) {
  const [code, setCode] = useState();
  const {
    mutate,
    isLoading: verifying,
    isSuccess,
  } = useMutation(verifyForgotPasswordOtp, {
    onError(err) {
      notification.error({ message: getErrorMessage(err) });
    },

    onSuccess(_data, { code }) {
      setCode(code);
    },
  });

  const handleSubmit = () => {
    if (verifying) return;

    mutate({ code, contact_number: number });
  };

  if (isSuccess)
    return (
      <ResetPassword
        resetNumber={resetNumber}
        code={code}
        contact_number={number}
      />
    );

  return (
    <Page className="bg-white">
      <PageHeader title="Verify Your Number" onBack={resetNumber} back />
      <div className="flex flex-col items-center p-8">
        <div className="flex aspect-square w-1/2 items-center justify-center rounded-full bg-green-500/10 p-8">
          <img className="" src={messageSendImg} />
        </div>

        <span className="mt-8 text-center text-lg font-medium">
          Please Enter The 6 digit Code Sent To +63{number}
        </span>

        <OTPInput
          inputStyles={{
            borderBottom: "1px solid var(--ant-primary-color)",
            width: "100%",
            height: "auto",
            marginRight: 0,
            aspectRatio: 1,
            outline: "2px solid transparent",
          }}
          className="mt-12 items-center justify-between gap-3 font-bold"
          value={code}
          onChange={setCode}
          autoFocus
          OTPLength={6}
          otpType="number"
        />

        <Button
          onClick={resend}
          loading={isLoading}
          className="mt-4"
          type="link"
        >
          Resend Code {throttle > 0 && `(${throttle}s)`}
        </Button>

        <Button
          loading={verifying}
          onClick={handleSubmit}
          htmlType="submit"
          shape="round"
          className="mt-8"
          type="primary"
          size="large"
          block
        >
          Send
        </Button>
      </div>
    </Page>
  );
}
