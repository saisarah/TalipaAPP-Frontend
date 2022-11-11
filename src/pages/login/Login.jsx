import { Button, Checkbox, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="mx-8 flex min-h-screen flex-col justify-center py-8">
      <img width={255} className="mx-auto" src="/assets/logo.png" />
      <div className="mt-16 flex  flex-col text-center">
        <span className="text-4xl font-extrabold text-[#273518]">
          Welcome Back
        </span>
        <span className="text-sm text-slate-600 mt-2">Login to your account</span>
      </div>
      <div className="mt-16">
        <Input
          prefix={<UserOutlined className="mr-2" />}
          className="talipaapp-input-1"
          placeholder="Email"
          size="large"
        />
        <Input.Password
          prefix={<LockOutlined className="mr-2" />}
          className="talipaapp-input-1 mt-4"
          placeholder="Password"
          size="large"
        />
        <div className="mt-2 flex justify-between text-sm">
          <label className="flex items-center">
            <input className="talipaapp-input-1 mr-2" type="checkbox" />
            Remember me
          </label>
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        <div className="mt-16">
          <button
            className="talipaapp-button-1 w-full font-bold"
            href="/register"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
