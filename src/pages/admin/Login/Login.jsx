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
        <Card className="my-8 shadow-lg w-[30rem] flex justify-center">
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
              // placeholder="912 3456 789"
              // inputProps={{ prefix: "+63", required: true }}
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

            {/* <p>
              Dont have an account? Sign up
              <Link className="ml-1 text-primary" to={"/register"}>
                here
              </Link>
            </p> */}
          </Form>
        </div>
        
        
        
        {/* <Link to={"/"} className="">
          Help Center
        </Link> */}
        </Card>
        </div>
      </div>
  );
}
