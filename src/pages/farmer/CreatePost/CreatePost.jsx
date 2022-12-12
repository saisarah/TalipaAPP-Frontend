import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space, Upload } from "antd";
import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import { crops, PricingType } from "./post-data";
import { rules } from "./rules";
import { unit } from "./post-data";
import TextArea from "antd/lib/input/TextArea";

function SelectComponent({ label, name, placeholder, options }) {
  return (
    <Form.Item label={label} name={name} rules={rules.commodity}>
      <Select placeholder={placeholder} size="large" options={options} />
    </Form.Item>
  );
}

function InputComponent({ placeholder, label, name }) {
  return (
    <Form.Item label={label} name={name} rules={rules.commodity}>
      <Input addonAfter="kg" placeholder={placeholder} size="large" />
    </Form.Item>
  );
}

function TextAreaComponent({ placeholder, label, name }) {
  return (
    <Form.Item label={label} name={name}>
      <TextArea rows={4} placeholder={placeholder} />
    </Form.Item>
  );
}

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


export default function CreatePost() {
  return (
    <div className="mx-auto min-h-screen max-w-md  bg-slate-50">
      <PageHeader
        left={
          <Link to="/farmer">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Create Post"
      />
      <div className="mx-auto min-h-screen max-w-md">
        <Form layout="vertical">
          <SelectComponent
            label="Commodity"
            name="commodity"
            placeholder="Select Commodity"
            options={crops}
          />
          <SelectComponent
            label="Unit"
            name="unit"
            placeholder="Select Unit"
            options={unit}
          />

          <SelectComponent
            label="Pricing Type"
            name="pricing type"
            placeholder="Select Pricing Type"
            options={PricingType}
          />

          <InputComponent
            label="Total Stocks"
            name="total stocks"
            placeholder="Input Kilogram"
          />
          <TextAreaComponent
            label="Details"
            name="details"
            placeholder="Input Details"
          />
          <Upload {...props}>
            <Button icon={<UploadOutlined />} size="large" className="w-full" block={true}>Click to Upload</Button>
          </Upload>
        </Form>
      </div>
    </div>
  );
}
