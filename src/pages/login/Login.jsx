import { Button, Checkbox, Form, Input, Spin } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="mx-auto min-h-screen max-w-md text-center">
      <img src="/assets/images/logo(1).svg" alt="" />

      <p className="">Enter your phone number to get start.</p>
      <Input
        type="number"
        className="btn-outlined"
        placeholder="+63 9** *** ****"
      />
      <Link to={"/verification"}>
        <Input
          type="submit"
          className="mb-6 bg-primary text-white"
          value="Next"
        />
      </Link>

      <p>Dont have an account</p>
      <Link to={"/register"}>Sign up here</Link>
    </div>
  );
}
