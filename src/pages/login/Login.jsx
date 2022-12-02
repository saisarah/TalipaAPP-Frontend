import { Button, Checkbox, Form, Input, Spin } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-white p-4 text-center">
      <img src="/assets/images/logo(1).svg" alt="" />

      <p className="">Enter your phone number to get start.</p>
      <Input
        type="text"
        placeholder="+63 9"
        className="mb-12"
        style={{ border: "none", borderBottom: "1px solid #000" }}
      />
      <Link to={"/verification"}>
        <Input
          type="submit"
          className="my-12 mb-6 bg-primary text-white"
          value="Next"
        />
      </Link>

      <p>Dont have an account</p>
      <Link to={"/register"}>Sign up here</Link>
      <br />
      <Link
        to={"/"}
        className="fixed
             inset-x-0 bottom-0 p-4
             "
      >
        Help Center
      </Link>
    </div>
  );
}
