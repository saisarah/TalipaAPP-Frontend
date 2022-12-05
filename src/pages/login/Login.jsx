import { useMutation } from "@tanstack/react-query";
import { Button, Input, message, notification } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sendLoginOtp } from "../../apis/AuthApi";
import { getErrorMessage } from "../../helpers/Http";
import Verification from "./Verification";

export default function Login() {
  const [phone, setPhone] = useState("");
  const { mutate, isLoading, isSuccess, reset } = useMutation(sendLoginOtp, {
    onError(error) {
      message.error(getErrorMessage(error))
    }
  })
  
  const sendOtp = () => {
    if (isLoading) return;
    mutate(phone)
  }

  if (isSuccess) return <Verification reset={reset} phone={phone}/>

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-slate-50 p-4 px-8 text-center">
      <img className="mr-auto" src="/assets/images/logo.svg" alt="" />

      <p className="">Enter your phone number to get start.</p>
      <div className="flex-grow">
        <Input
          size="large"
          className="rounded"
          addonBefore="+63"
          placeholder="923 4567 890"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          maxLength="10"
        />

        <Button
          className="my-12 mb-6 rounded"
          block
          size="large"
          type="primary"
          loading={isLoading}
          onClick={sendOtp}
        >
          Next
        </Button>

        <p>
          <span>Dont have an account</span>
          <br />
          <span>
            Sign up
            <Link className="text-primary" to={"/register"}>
              here
            </Link>
          </span>
        </p>
      </div>

      <Link to={"/"} className="">
        Help Center
      </Link>
    </div>
  );
}
