import { Button, Checkbox, Form, Input, Spin } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-slate-50 p-4 px-8 text-center">
      <img src="/assets/images/logo.svg" alt="" />

      <p className="">Enter your phone number to get start.</p>
      <div className="flex-grow">
        <Input
          size="large"
          className="rounded"
          addonBefore="+63"
          placeholder="923 4567 890"
        />

        <Link to={"/verification"}>
          <Input
            type="submit"
            className="my-12 mb-6 bg-primary text-white"
            value="Next"
            size="large"
          />
        </Link>

        <p>
          <span>Dont have an account</span><br/>
          <span>Sign up <Link className="text-primary" to={"/register"}>here</Link></span>
        </p>
      </div>

      <Link to={"/"} className="">
        Help Center
      </Link>
    </div>
  );
}
