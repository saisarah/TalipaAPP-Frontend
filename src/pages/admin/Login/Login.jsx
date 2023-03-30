import FormItem from "@/components/FormItem";
import { getErrorMessage } from "@/helpers/Http";
import { useLogin } from "@/query/mutations/useLogin";
import { Button, Card, Form, Input, notification } from "antd";
import { Link } from "react-router-dom";
import logo from "/assets/images/logo.svg";
import { rules } from "./rules";

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
    <div className="flex justify-center">
      <div className="flex flex-col p-4 px-8 text-center">
        <Card className="my-8 flex w-[30rem] justify-center shadow-lg">
          <img
            className="mx-auto mt-10"
            src={logo}
            height="100"
            width="250"
            alt=""
          />
          <p className="mt-4">TalipaApp Dashboard</p>

          <div className="mt-10 w-96 p-4">
            <Form layout="vertical" onFinish={handleSubmit}>
              <FormItem
                label="Email Address"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                rules={rules.email}
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

              <div className="my-8 mb-2 flex flex-col">
                <Button
                  className="rounded"
                  block
                  type="primary"
                  size="large"
                  htmlType="submit"
                  loading={isLoading}
                >
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
}
