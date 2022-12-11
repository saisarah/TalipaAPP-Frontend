import { Button, Form, Input, Select } from "antd";
import { rules } from "../rules";

// Form Item Wrapper
// Just to make the code simpler
const FormItem = ({
  children,
  name,
  rules,
  label,
  placeholder,
  type = "text",
  addonBefore,
  requiredMark,
}) => {
  return (
    <Form.Item
      requiredMark={requiredMark}
      rules={rules}
      name={name}
      className="mb-4"
      label={label}
      hasFeedback
    >
      {children || (
        <Input
          addonBefore={addonBefore}
          type={type}
          placeholder={placeholder}
          size="large"
          className="rounded"
        />
      )}
    </Form.Item>
  );
};

export default function PersonalInformationForm({ setStep }) {
  return (
    <Form layout="vertical" onFinish={() => setStep(1)}>
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
        name="phone"
        rules={rules.phone}
        label="Phone"
        placeholder="912 3456 789"
        addonBefore="+63"
        type="number"
      />

      <FormItem
        name="email"
        placeholder="Enter your email here"
        rules={rules.email}
        requiredMark="optional"
        type="email"
        label="Email"
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
