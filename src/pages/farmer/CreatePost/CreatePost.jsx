import {
  ArrowLeftOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Select, Upload } from "antd";
import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import { crops, pricingType, size, unit } from "./post-data";
import { rules } from "./rules";
import TextArea from "antd/lib/input/TextArea";

function SelectComponent({ label, name, placeholder, options }) {
  return (
    <Form.Item label={label} name={name} rules={rules.commodity}>
      <Select placeholder={placeholder} size="large" options={options} />
    </Form.Item>
  );
}

function InputComponent({ placeholder, label, name,addonAfter }) {
  return (
    <Form.Item label={label} name={name} rules={rules.commodity}>
      <Input addonAfter={addonAfter} placeholder={placeholder} size="large" />
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
    <div className="mx-auto min-h-screen max-w-md bg-slate-50">
      <PageHeader
        left={
          <Link to="/farmer/home">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Create Post"
      />
      <div className="m-4 p-4">
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
            name="pricingtype"
            placeholder="Select Pricing Type"
            options={pricingType}
          />
          <div className="grid grid-cols-2 gap-2">
            <InputComponent
              label="Total Stocks"
              name="totalstocks"
              placeholder="Input Kilogram"
              addonAfter="kg"
            />
            <InputComponent
              label="Price"
              name="price"
              placeholder="Input Price"
              addonAfter="/kg"
            />
          </div>
          <TextAreaComponent
            label="Details"
            name="details"
            placeholder="Input Details"
          />
          <Upload className="grid grid-cols-1">
            <Button
              icon={<UploadOutlined />}
              size="large"
              className="w-full"
              block
            >
              Click to Upload
            </Button>
          </Upload>
          <div className="grid grid-cols-2 gap-2">
            <SelectComponent
              label="Size"
              name="size"
              placeholder="Input Size"
              options={size}
            />
            <InputComponent
              label="Price"
              name="price"
              placeholder="Input Price"
            />
          </div>

          <Button
            icon={<PlusOutlined />}
            className="float-right mt-2 text-lg font-bold text-[#739559]"
            size={"large"}
          >
            Add Size
          </Button>
          <Button
            className="mt-2 w-full rounded bg-[#739559] text-lg font-bold text-white  "
            size={"large"}
          >
            Post
          </Button>

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
            options={pricingType}
          />
          <div className="grid grid-cols-2 gap-2">
            <InputComponent
              label="Total Stocks"
              name="total stocks"
              placeholder="Input Kilogram"
              addonAfter="pcs"
            />
            <InputComponent
              label="Price"
              name="price"
              placeholder="Input Price"
              addonAfter="/pc"
            />
          </div>
          <TextAreaComponent
            label="Details"
            name="details"
            placeholder="Input Details"
          />
          <Upload className="grid grid-cols-1">
            <Button
              icon={<UploadOutlined />}
              size="large"
              className="w-full"
              block
            >
              Click to Upload
            </Button>
          </Upload>
          <div className="grid grid-cols-2 gap-2">
            <SelectComponent
              label="Size"
              name="size"
              placeholder="Input Size"
              options={size}
            />
            <InputComponent
              label="Price"
              name="price"
              placeholder="Input Price"
            />
          </div>

          <Button
            icon={<PlusOutlined />}
            className="float-right mt-2 text-lg font-bold text-[#739559]"
            size={"large"}
          >
            Add Size
          </Button>
          <Button
            className="mt-2 w-full rounded bg-[#739559] text-lg font-bold text-white  "
            size={"large"}
          >
            Post
          </Button>
        </Form>
      </div>
    </div>
  );
}
