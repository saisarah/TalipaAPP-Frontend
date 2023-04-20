import FormItem from "@/components/FormItem";
import { getErrorMessage } from "@/helpers/Http";
import { useLogin } from "@/query/mutations/useLogin";
import { Button, Form, Input, notification } from "antd";
import { Link } from "react-router-dom";
import logo from "./images/tali.svg";
import forlogin from "./images/forlogin.png";
import { useEffect, useState } from "react";

export default function Login() {
  const { mutate, isLoading } = useLogin({
    onError(err) {
      notification.error({ message: getErrorMessage(err) });
    },
    onSuccess() {
      notification.success({ message: "Login Succesfully" });
    },
  });

  const handleSubmit = (data) => {
    if (isLoading) return;
    mutate(data);
  };

  return (
    <>
      <div className="flex min-h-screen">
        <div
          className="relative flex-grow hidden overflow-hidden p-10 md:block "
          style={{
            backgroundImage: `url(${forlogin})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mt-20 max-w-xl font-poppins text-4xl font-semibold text-white">
            Digital Platform Connecting Farmers and Vendors
          </div>
        </div>

        <div className="relative flex-shrink-0 w-full max-w-[410px] bg-white px-4 py-10 mx-auto sm:my-4 md:my-0 md:shadow-none md:py-0 sm:shadow text-center md:px-8 flex flex-col justify-center">
          <div className="flex flex-col text-center">
            <img className="mx-auto w-56" src={logo} alt="" />
            <p className="mt-4 text-center font-poppins text-lg font-semibold">
              Hello! Welcome Back 👋🏻
            </p>
            <div className="mt-8 flex-grow">
              <Form layout="vertical text-center" onFinish={handleSubmit}>
                <FormItem
                  label="Mobile Number"
                  name="contact_number"
                  placeholder="912 3456 789"
                  type="number"
                  inputProps={{ prefix: "+63", required: true }}
                />

                <FormItem label="Password" name="password">
                  <Input.Password
                    required
                    placeholder="Enter your password here"
                    size="large"
                    className="rounded"
                  />
                </FormItem>

                <div className="flex justify-end">
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>

                <div className="mt-4 mb-6 flex flex-col">
                  <Button
                    className="rounded"
                    block
                    size="large"
                    type="primary"
                    htmlType="submit"
                    loading={isLoading}
                  >
                    Login
                  </Button>
                </div>

                <p>
                  Dont have an account? Sign up
                  <Link className="ml-1  text-primary" to={"/register"}>
                    here
                  </Link>
                </p>
              </Form>
            </div>

            <Link to={"/"} className="">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
