import FormItem from '@/components/FormItem'
import { Button, Card, Form, Input } from 'antd'
import React from 'react'
import { rules } from "./rules";

function VerificationUser() {
  return (
    <div>
      <Card>
        <p className='text-xl my-4'>Setup your password here.</p>
        <Form 
          layout="vertical">
        <FormItem
        name="password"
        label="Password"
        rules={rules.password}
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
          placeholder="Enter your password here"
          size="large"
          className="rounded"
        />
      </FormItem>

      <FormItem
        name="password_confirmation"
        label="Re-Enter Password"
        rules={rules.password_confirmation}
      >
        <Input.Password
          placeholder="Re-Enter your password here"
          size="large"
          className="rounded"
        />
      </FormItem>
      <Button
          type="primary"
          className="rounded float-right"
          htmlType="submit"
          size="large"
        >
          Submit
        </Button>
      </Form>
      </Card>
    </div>
  )
}

export default VerificationUser
