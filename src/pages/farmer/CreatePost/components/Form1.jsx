import { useCropOptions } from "@/query/queries/useCropsQuery";
import { Button, Form, Input, Select } from "antd";
import { required } from "../rules";

export default function Form1({ step, setStep, formData }) {
  const { data: crops, isLoading: fetchingCrops } = useCropOptions();

  const handleSubmit = ({ crop_id, title, caption }) => {
    formData.crop_id = crop_id;
    formData.title = title;
    formData.caption = caption;
    // formData.set("crop_id", crop_id);
    // formData.set("title", title);
    // formData.set("caption", caption);

    setStep(1);
  };

  return (
    <Form
      style={{ transform: `translateX(${-step * 100}%)` }}
      className="min-w-full flex-shrink-0 p-4 transition"
      layout="vertical"
      onFinish={handleSubmit}
    >
      <Form.Item
        name="crop_id"
        rules={required()}
        label="Commodity"
        tooltip="[Update this]"
      >
        <Select
          placeholder="Select Commodity"
          options={crops}
          size="large"
          loading={fetchingCrops}
        />
      </Form.Item>

      <Form.Item
        name="title"
        rules={required()}
        label="Title"
        tooltip="[Update this]"
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        rules={required()}
        name="caption"
        label="Add Description"
        tooltip="[Update this]"
      >
        <Input.TextArea size="large" />
      </Form.Item>

      <Button
        className="mt-4"
        htmlType="submit"
        type="primary"
        size="large"
        block
      >
        Next
      </Button>
    </Form>
  );
}
