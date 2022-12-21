import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, notification } from "antd";
import { Link } from "react-router-dom";
import { login } from "../../apis/AuthApi";
import FormItem from "../../components/FormItem";
import PageHeader from "../../components/PageHeader";
import { getErrorMessage, setAuthorization } from "../../helpers/Http";
import queryKeyFactory from "../../query/queryKeyFactory";

export default function Login() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(login, {
    onError(error) {
      notification.error({ message: getErrorMessage(error) });
    },

    onSuccess({ token, user }) {
      notification.success({ message: "Successfully Login" });
      setAuthorization(token);
      queryClient.setQueryData(queryKeyFactory.currentUser, user);
    },
  });

  const handleSubmit = (data) => {
    if (isLoading) return;
    mutate(data);
  };

  return (
    <div className="mx-auto min-h-screen max-w-md bg-white">
      <PageHeader title="Login" />

      <div className="flex flex-col  p-4 px-8 text-center">
        <img className="mr-auto" src="/assets/images/logo.svg" alt="" />

        <p className="">Welcome to TalipaAPP</p>
        <div className="flex-grow">
          <Form layout="vertical" onFinish={handleSubmit}>
            <FormItem
              label="Mobile Number"
              name="contact_number"
              placeholder="912 3456 789"
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
              <Link to="#">Forgot Password?</Link>
            </div>

            <div className="my-12 mb-6 flex flex-col">
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
              <Link className="ml-1 text-primary" to={"/register"}>
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
  );
}
