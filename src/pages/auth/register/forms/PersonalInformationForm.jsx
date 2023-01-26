import { Button, Form, Input, Select } from "antd";
import { useContext } from "react";
import FormItem from "../../../../components/FormItem";
import { RegistrationContext } from "../../../../contexts/RegistrationContext";
import { rules } from "../rules";

export default function PersonalInformationForm() {
  const { setStep, data, setData } = useContext(RegistrationContext);

  const handleSubmit = (personalData) => {
    setData((data) => ({ ...data, ...personalData }));
    setStep((step) => step + 1);
  };

  return (
    <Form initialValues={data} layout="vertical" onFinish={handleSubmit}>
      <FormItem
        name="firstname"
        rules={rules.firstname}
        label="Firstname"
        placeholder="Enter your firstname here"
      />
      <FormItem
        name="middlename"
        rules={rules.middlename}
        label="Middlename"
        placeholder="Enter your middlename here"
      />
      <FormItem
        name="lastname"
        rules={rules.lastname}
        label="Lastname"
        placeholder="Enter your lastname here"
      />

      <FormItem
        name="contact_number"
        rules={rules.phone}
        label="Phone"
        placeholder="912 3456 789"
        inputProps={{ prefix: "+63" }}
        type="number"
        validateFirst
        max={10}
      />

      <FormItem
        label="Gender"
        name="gender"
        placeholder="Select gender"
        rules={rules.gender}
      >
        <Select size="large" className="rounded" placeholder="Select Gender">
          <Select.Option value="">Prefer not to say</Select.Option>
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
      </FormItem>

      <FormItem
        name="email"
        placeholder="Enter your email here"
        rules={rules.email}
        requiredMark="optional"
        type="email"
        label="Email"
        validateFirst
      />

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

      <div className="mb-4 flex justify-end">
        <Button
          type="primary"
          className="rounded"
          htmlType="submit"
          size="large"
        >
          Next
        </Button>
      </div>
    </Form>
  );
}
