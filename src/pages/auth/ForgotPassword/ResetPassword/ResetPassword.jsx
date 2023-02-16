import FormItem from "@/components/FormItem";
import PageHeader from "@/components/PageHeader";
import { Button, Form, Input } from "antd";
import { reset } from "./rules";
import React from "react";

export default function ResetPassword() {
  return (
    <div>
      <div className="mx-auto min-h-screen max-w-md bg-white">
        <PageHeader back="/login" title="Create New Password" />
        <div className="mx-6 mt-4 text-sm">
          <span>
            Your new password must be different from previous used passwords.
          </span>
        </div>
        <div className="mx-6 mt-6">
          <Form layout="vertical">
            <FormItem
              label="Password"
              name="password"
              rules={reset.password}
              tooltip={
                <span>
                  - Must be atleast 8 characters
                  <br />
                  - Must Contain Letters and Numbers
                  <br />- Must contain Uppercase and Lowecase letter
                </span>
              }
            >
              <Input.Password
                required
                placeholder="Enter your password here"
                size="large"
                className="rounded"
              />
            </FormItem>
            <FormItem
              label="Confirm Password"
              name="password_confirmation"
              rules={reset.password_confirmation}
              tooltip={
                <span>
                  - Must be atleast 8 characters
                  <br />
                  - Must Contain Letters and Numbers
                  <br />- Must contain Uppercase and Lowecase letter
                </span>
              }
            >
              <Input.Password
                required
                placeholder="Enter your password here"
                size="large"
                className="rounded"
              />
            </FormItem>
          </Form>
          <div className="my-12 mb-6 flex flex-col">
            <Button
              className="rounded"
              block
              size="large"
              type="primary"
              htmlType="submit"
            >
              Reset Password
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
