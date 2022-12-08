import { Button, message, Spin } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { verifyLoginOtp } from "../../apis/AuthApi";
import { getErrorMessage, setAuthorization } from "../../helpers/Http";
import { useNavigate } from "react-router-dom";
import queryKeyFactory from "../../query/queryKeyFactory";

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

export default function Verification({ reset, phone }) {

  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const [OTP, setOTP] = useState("");
  const { mutate, isLoading } = useMutation(verifyLoginOtp, {
    onSuccess({ token, user }) {
      localStorage.setItem('auth_token', token)
      setAuthorization(token)
      queryClient.setQueryData(queryKeyFactory.currentUser, user)

      if (user.user_type === 'farmer')
        navigate('/farmer')
      else if (user.user_type === 'vendor')
        navigate('/')
      else
        throw 'Invalid User Type'
    },
    onError(error) {
      message.error(getErrorMessage(error))
      setOTP('')
    }
  })

  useEffect(() => {
    if (OTP.length === 4) {
      mutate({ code: OTP, contact_number:phone })
    }
  }, [OTP])

  const append = (n) => {
    setOTP((OTP) => {
      if (OTP.length < 4 && n >= 0) return OTP + n;
      if (OTP.length > 0 && n < 0) return OTP.substring(0, OTP.length - 1);
      return OTP;
    });
  };

  return (
    <Spin tip="Verifying your code" spinning={isLoading}>
      <div className="mx-auto flex min-h-screen max-w-md flex-col bg-slate-50 p-4">
        <Button type="text" onClick={reset} className="self-start">
          <LeftOutlined />
        </Button>


        <p className="my-4">Verification</p>
        <span className="block text-xl font-bold">
          We sent you an SMS verification code
        </span>
        <span>On number: +63{phone}</span>

        <div className="mt-4 flex flex-grow flex-col justify-end">
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
            className="items-center justify-between gap-4 font-bold"
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
          />

          <div className="mt-4 text-center">
            <span>Code not received? </span>
            <span>Resend</span>
          </div>

          <div className="mt-4 flex flex-wrap justify-end">
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
              <img
                className="mx-auto"
                src="/assets/images/icon _delete.svg"
                alt=""
              />
            </OTPButton>
          </div>
        </div>
      </div>
    </Spin>
  );
}
