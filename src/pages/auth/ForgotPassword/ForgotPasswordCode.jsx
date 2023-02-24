import { Button, message, Spin } from "antd";
import OTPInput from "otp-input-react";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { verifyLoginOtp } from "@/apis/AuthApi";
import PageHeader from "@/components/PageHeader";
import queryKeyFactory from "@/query/queryKeyFactory";
import ResetPassword from "./ResetPassword/ResetPassword";
import iconDeleteImg from "./images/icon_delete.svg";
import { currentUserKey } from "@/apis/UserApi";

function OTPButton({ children, className = "", onClick }) {
  return (
    <Button
      onClick={onClick}
      className={`aspect-square h-auto w-1/3 border-none ${className}`}
      type="ghost"
    >
      {children}
    </Button>
  );
}

export default function ForgotPasswordCode({ reset, phone }) {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [OTP, setOTP] = useState("");
  const { mutate, isLoading } = useMutation(verifyLoginOtp, {
    onSuccess({ token, user }) {
      setAuthorization(token);
      queryClient.setQueryData(currentUserKey, user);

      if (user.user_type === "farmer") navigate("/farmer");
      else if (user.user_type === "vendor") navigate("/");
      else throw "Invalid User Type";
    },
    onError(error) {
      message.error(getErrorMessage(error));
      setOTP("");
    },
  });

  useEffect(() => {
    if (OTP.length === 6) {
      if (OTP === "111111") {
        setIsCorrect(true);
      }
      // mutate({ code: OTP, contact_number: phone });
    }
  }, [OTP]);

  const append = (n) => {
    setOTP((OTP) => {
      if (OTP.length < 6 && n >= 0) return OTP + n;
      if (OTP.length > 0 && n < 0) return OTP.substring(0, OTP.length - 1);
      return OTP;
    });
  };

  if (isCorrect) {
    return <ResetPassword />;
  }

  return (
    // <PageHeader back={"/login"} title="TalipaAPP" />
    <Spin tip="Verifying your code" spinning={isLoading}>
      <div className="app-size">
        <PageHeader back={"/forgotpassword"} title="TalipaAPP" />
        <div className="flex flex-col bg-white px-7 py-4">
          <div className="">
            <span className="block text-2xl font-bold">
              Enter 6 Digits Code
            </span>
            <p className="mt-2">
              Enter 6 digits code that you received on you number.
            </p>
          </div>

          <div className="mt-9 flex flex-grow flex-col">
            <OTPInput
              inputStyles={{
                borderRadius: "4px",
                width: "100%",
                height: "auto",
                marginRight: 0,
                aspectRatio: 1,
                boxShadow: "2px 2px 2px 2px #ccc",
                outlineColor: "green",
              }}
              className="items-center justify-between gap-3 font-bold"
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={6}
              otpType="number"
            />

            <div className="mt-4 text-center">
              <span>Code not received? </span>
              <span>Resend</span>
            </div>

            <div className="flex flex-wrap justify-end">
              <OTPButton onClick={() => append(1)}>1</OTPButton>
              <OTPButton onClick={() => append(2)}>2</OTPButton>
              <OTPButton onClick={() => append(3)}>3</OTPButton>
              <OTPButton onClick={() => append(4)}>4</OTPButton>
              <OTPButton onClick={() => append(5)}>5</OTPButton>
              <OTPButton onClick={() => append(6)}>6</OTPButton>
              <OTPButton onClick={() => append(7)}>7</OTPButton>
              <OTPButton onClick={() => append(8)}>8</OTPButton>
              <OTPButton onClick={() => append(9)}>9</OTPButton>
              <OTPButton onClick={() => append(0)}>0</OTPButton>
              <OTPButton onClick={() => append(-1)}>
                <img className="mx-auto" src={iconDeleteImg} alt="" />
              </OTPButton>
            </div>
          </div>
        </div>
      </div>
    </Spin>
  );
}
