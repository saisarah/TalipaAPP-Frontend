import { Button, Checkbox, Form, Input, Spin } from "antd";
import { LockOutlined, UserOutlined, LeftOutlined } from "@ant-design/icons";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [OTP, setOTP] = useState("");

  return (
    <>
      <div className="mx-auto min-h-screen max-w-md p-5">
        <Link to={"/login"}>
          <LeftOutlined />
        </Link>
        <p>Verification</p>

        <div className="my-6">
          <h1 className="text-xl font-bold">We sent you an SMS code</h1>
          <p>on number: +63 9** **** ****</p>
        </div>

        <OTPInput
          className="my-auto items-center justify-center"
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={4}
          otpType="number"
          disabled={false}
          secure
        />
        <br />
        <ResendOTP onResendClick={() => console.log("Resend clicked")} />
      </div>
    </>
  );
}
