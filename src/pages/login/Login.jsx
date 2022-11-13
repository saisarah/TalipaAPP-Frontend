import { Button, Checkbox, Form, Input, Spin } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { sleep } from "../../helpers/utils";
import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";

export default function Login() {

  const [isLoading, setIsLoading] = useState(false)
  const { email, password, setIsLogin, isLogin } = useContext(AppContext)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isLoading) return;

    const data = new FormData(e.target)
    const inputEmail = data.get('email')
    const inputPassword = data.get('password')

    setIsLoading(true)
    await sleep(3000)
    setIsLoading(false)

    if (email !== inputEmail) {
      alert('The email you entered is not registed in our system.')
      return
    }

    if (password !== inputPassword) {
      alert('Wrong Email or Password')
      return
    }

    setIsLogin(true)
    navigate('/')

  }

  if (isLogin) {
    return <Navigate to='/' />
  }

  return (
    <form  onSubmit={handleSubmit} className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-8 py-8">
      <img width={255} className="mx-auto" src="/assets/logo.png" />
      <div className="mt-16 flex  flex-col text-center">
        <span className="text-4xl font-extrabold text-[#273518]">
          Welcome Back
        </span>
        <span className="mt-2 text-sm text-slate-600">
          Login to your account
        </span>
      </div>
      <div className="mt-16">
        <Input
          prefix={<UserOutlined className="mr-2" />}
          className="talipaapp-input-1"
          placeholder="Email"
          name="email"
          size="large"
        />
        <Input.Password
          prefix={<LockOutlined className="mr-2" />}
          className="talipaapp-input-1 mt-4"
          placeholder="Password"
          name="password"
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
            type="submit"
          >
            {isLoading ? 'Signing in...': 'Sign In'}
          </button>
          <p className="text-center">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </form>
  );
}
