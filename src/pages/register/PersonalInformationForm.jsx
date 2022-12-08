import { Button, Form, Input, Select } from "antd";

export default function PersonalInformationForm({ setStep }) {
  return (
    <Form layout="vertical" onFinish={() => setStep(1)}>
      <Form.Item className="mb-4" label="Firstname" hasFeedback>
        <Input
          type="text"
          placeholder="Enter your firstname here"
          size="large"
          className="rounded"
        />
      </Form.Item>
      <Form.Item className="mb-4" label="Middlename" hasFeedback>
        <Input
          type="text"
          placeholder="Enter your middlename here"
          size="large"
          className="rounded"
        />
      </Form.Item>
      <Form.Item className="mb-4" label="Lastname" hasFeedback>
        <Input
          type="text"
          placeholder="Enter your lastname here"
          size="large"
          className="rounded"
        />
      </Form.Item>
      <Form.Item className="mb-4" label="Phone" hasFeedback>
        <Input
          addonBefore="+63"
          type="text"
          placeholder="912 3456 789"
          size="large"
          className="rounded"
        />
      </Form.Item>
      <Form.Item className="mb-4" label="Email" hasFeedback>
        <Input
          type="email"
          placeholder="your_email@site.com"
          size="large"
          className="rounded"
        />
      </Form.Item>
      <Form.Item className="mb-4" label="Gender" hasFeedback initialValue="">
        <Select size="large" className="rounded">
          <Select.Option value="">Prefer not to say</Select.Option>
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
      </Form.Item>

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