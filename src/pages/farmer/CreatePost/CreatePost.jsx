import { ArrowLeftOutlined } from "@ant-design/icons";
import { Form, Input, Select, Space } from "antd";
import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import { crops, PricingType } from "./post-data";
import { rules } from "./rules";
import { unit } from "./post-data";

function SelectComponent({ label, name, placeholder, options }) {
  return (
    <Form.Item label={label} name={name} rules={rules.commodity}>
      <Select placeholder={placeholder} size="large" options={options} />
    </Form.Item>
  );
}

function InputComponent({ placeholder, label, name }) {
  return (
      <Input addonAfter="kg" placeholder={placeholder} size="large" />
  );
}

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
        </Form>
        <Form layout="vertical">
          <SelectComponent
            label="Unit"
            name="unit"
            placeholder="Select Unit"
            options={unit}
          />
        </Form>
        <Form layout="vertical">
          <SelectComponent
            label="Pricing Type"
            name="pricing type"
            placeholder="Select Pricing Type"
            options={PricingType}
          />
        </Form>
          <InputComponent
            label="Total Stocks"
            name="total stocks"
            placeholder="Input Kilogram"
          />
      </div>
    </div>
  );
}
