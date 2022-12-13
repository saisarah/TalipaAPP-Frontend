import {
  ArrowLeftOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Select, Space, Upload } from "antd";
import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import { pricingType, size, unit } from "./post-data";
import { rules } from "./rules";
import TextArea from "antd/lib/input/TextArea";
import useCropsQuery from "../../../query/queries/useCropsQuery";
import FormItem from "../../../components/FormItem";
import { useState } from "react";

const units = [
  { value: "kg", label: "Kilogram" },
  { value: "pc", label: "Piece" },
];

function SelectComponent({ label, name, placeholder, options }) {
  return (
    <Form.Item label={label} name={name} rules={rules.commodity}>
      <Select placeholder={placeholder} size="large" options={options} />
    </Form.Item>
  );
}

function InputComponent({ placeholder, label, name, addonAfter }) {
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
  const { data: crops, isLoading: fetchingCrops } = useCropsQuery({
    select: (data) => data.map(({ name, id }) => ({ value: id, label: name })),
  });

  const [selectedUnit, setSelectedUnit] = useState("kg");
  const [isStraight, setIsStraight] = useState(false);

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
      <div className="p-4">
        <Form layout="vertical">
          <FormItem label="Commodity" name="commodity" rules={rules.commodity}>
            <Select
              placeholder="Select Commodity"
              options={crops}
              size="large"
              className="rounded"
              loading={fetchingCrops}
            />
          </FormItem>

          <FormItem label="Unit" name="unit" initialValue={selectedUnit}>
            <Select
              className="rounded"
              size="large"
              value={selectedUnit}
              onChange={(unit) => setSelectedUnit(unit)}
            >
              <Select.Option value="kg">Kilogram</Select.Option>
              <Select.Option value="pc">Piece</Select.Option>
            </Select>
          </FormItem>

          <FormItem
            label="Pricing Type"
            name="is_straight"
            initialValue={isStraight}
          >
            <Select
              className="rounded"
              size="large"
              value={isStraight}
              onChange={(isStraight) => setIsStraight(isStraight)}
            >
              <Select.Option value={true}>Straight</Select.Option>
              <Select.Option value={false}>Not Straight</Select.Option>
            </Select>
          </FormItem>

          <div
            className={`grid gap-4 ${
              isStraight ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            <FormItem
              label="Total Stocks"
              name="stocks"
              inputProps={{ addonAfter: selectedUnit }}
            />
            {isStraight && (
              <FormItem
                label="Price"
                name="price"
                inputProps={{ addonAfter: `/${selectedUnit}` }}
              />
            )}
          </div>

          <FormItem label="Details" name="details">
            <Input.TextArea
              size="large"
              className="rounded"
              placeholder="Add a short description"
            />
          </FormItem>

          <FormItem label="Add Photos">
            <Upload className="grid grid-cols-1">
              <Button icon={<UploadOutlined />} size="large" block>
                Click to Upload
              </Button>
            </Upload>
          </FormItem>

          {!isStraight && (
            <>
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
                  addonAfter={`/${selectedUnit}`}
                />
              </div>

              <Button
                icon={<PlusOutlined />}
                className="float-right mt-2 text-lg font-bold text-[#739559]"
                size={"large"}
              >
                Add Size
              </Button>
            </>
          )}
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
