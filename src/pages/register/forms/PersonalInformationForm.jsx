import { Button, Form, Input, Select } from "antd";
import FormItem from "../../../components/FormItem";
import { rules } from "../rules";

export default function PersonalInformationForm({
  personalInformationData,
  setPersonalInformationData,
  setStep,
}) {
  const handleSubmit = (data) => {
    setPersonalInformationData(data);
    setStep((step) => step + 1);
  };

  return (
    <Form
      initialValues={personalInformationData}
      layout="vertical"
      onFinish={handleSubmit}
    >
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
        addonBefore="+63"
        type="number"
        validateFirst
        max={10}
      />

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
