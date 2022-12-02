import { Button, Checkbox, Form, Input, Spin } from "antd";
import {
  LockOutlined,
  UserOutlined,
  LeftOutlined,
  BorderBottomOutlined,
} from "@ant-design/icons";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [OTP, setOTP] = useState("");

  return (
    <>
      <div className="mx-auto min-h-screen max-w-md bg-white p-5">
        <Link to={"/login"}>
          <LeftOutlined />
        </Link>
        <p>Verification</p>

        <div className="my-6">
          <h1 className="text-xl font-bold">We sent you an SMS code</h1>
          <p>
            on number: <span className="text-primary">+63 9** **** ****</span>
          </p>
        </div>

        <br />
        <br />
        <br />
        <br />
        <OTPInput
          inputStyles={{
            // border: "1px solid black",
            borderRadius: "3px",
            width: "60px",
            height: "60px",
            boxShadow: "2px 2px 2px 2px #ccc",
            outlineColor: "green",
          }}
          className="my-auto items-center justify-center"
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={4}
          otpType="number"
          disabled={false}
          // secure
        />
        <br />
        {/* <ResendOTP onResendClick={() => console.log("Code not received?")} /> */}

        <div className="mb-6 text-center">
          <Link>Code not received?</Link>
        </div>

        <div>
          <div className="mb-10 grid grid-cols-3 items-center gap-4">
            <Button style={{ border: "none" }}>1</Button>
            <Button style={{ border: "none" }}>2</Button>
            <Button style={{ border: "none" }}>3</Button>
          </div>
          <div className="mb-10 grid grid-cols-3 items-center gap-4">
            <Button style={{ border: "none" }}>4</Button>
            <Button style={{ border: "none" }}>5</Button>
            <Button style={{ border: "none" }}>6</Button>
          </div>
          <div className="mb-10 grid grid-cols-3 items-center gap-4">
            <Button style={{ border: "none" }}>7</Button>
            <Button style={{ border: "none" }}>8</Button>
            <Button style={{ border: "none" }}>9</Button>
          </div>
          <div className="mb-10 grid grid-cols-3 items-center gap-4">
            <Button style={{ border: "none" }}></Button>
            <Button style={{ border: "none" }}>0</Button>
            <Button
              className="grid justify-items-center"
              style={{ border: "none" }}
            >
              <img src="/assets/images/icon _delete.svg" alt="" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
