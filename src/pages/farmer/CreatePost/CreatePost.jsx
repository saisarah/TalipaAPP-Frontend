import {
  ArrowLeftOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Select, Space, Upload } from "antd";
import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import { pricingType, size, unit } from "./post-data";
import { rules } from "./rules";
import TextArea from "antd/lib/input/TextArea";
import useCropsQuery from "../../../query/queries/useCropsQuery";
import FormItem from "../../../components/FormItem";
import { useState } from "react";
import { toFormData } from "../../../helpers/utils";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "../../../apis/Post";

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

function InputComponent({
  placeholder,
  label,
  name,
  addonAfter,
  required = false,
  type = null,
}) {
  return (
    <Form.Item label={label} name={name}>
      <Input
        type={type}
        required={required}
        addonAfter={addonAfter}
        placeholder={placeholder}
        size="large"
      />
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
  const [attachments, setAttachments] = useState([]);
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(createPost, {
    onSuccess(data) {
      console.log(data);
      Modal.success({content: "Post created successfully"});
      navigate("/farmer/home");
    },
    onError(error) {
      Modal.error({ content: "An error occurred" });
      console.log(error);
    },
  });

  const handleSubmit = (data) => {
    console.log({ ...data, attachments });
    if (isLoading) return;
    const formData = toFormData(data);
    formData.append("attachments", attachments[0]);
    mutate(formData);
  };

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
        <Form layout="vertical" onFinish={handleSubmit}>
          <FormItem label="Commodity" name="commodity">
            <Select
              required
              placeholder="Select Commodity"
              options={crops}
              size="large"
              className="rounded"
              loading={fetchingCrops}
            />
          </FormItem>

          <FormItem label="Delivery Options" name="delivery_options">
            <Select
              required
              placeholder="Select Available Delivery Options"
              options={[{ value: "Pick-up" }, { value: "Transportify" }]}
              size="large"
              mode="multiple"
              className="rounded"
              loading={fetchingCrops}
            />
          </FormItem>

          <FormItem label="Payment Options" name="payment_options">
            <Select
              required
              placeholder="Select Available Payment Options"
              options={[{ value: "GCash" }, { value: "Cash" }]}
              size="large"
              mode="multiple"
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

          {isStraight && (
            <div className="grid grid-cols-2 gap-4">
              <FormItem
                className="hidden"
                name="sizes"
                inputProps={{ value: "__default" }}
              />
              {/* <input type="hidden" name="sizes[0]" value="__default" /> */}
              <FormItem
                label="Total Stocks"
                name="stocks"
                inputProps={{ addonAfter: selectedUnit }}
              />
              <FormItem
                label="Price"
                name="prices"
                inputProps={{ addonAfter: `/${selectedUnit}` }}
              />
            </div>
          )}
          <FormItem label="Details" name="details">
            <Input.TextArea
              size="large"
              className="rounded"
              placeholder="Add a short description"
            />
          </FormItem>

          <FormItem label="Add Photos">
            <Upload
              onRemove={(file) => {
                setAttachments((attachments) =>
                  attachments.filter((a) => a !== file)
                );
              }}
              fileList={attachments}
              beforeUpload={(file) => {
                setAttachments((files) => [...files, file]);
                return false;
              }}
              className="grid grid-cols-1"
            >
              <Button icon={<UploadOutlined />} size="large" block>
                Click to Upload
              </Button>
            </Upload>
          </FormItem>

          {!isStraight && (
            <>
              <div className="grid grid-cols-3 gap-2">
                {/* <InputComponent
                  label="Size"
                  name="sizes"
                  placeholder="Input Price"
                /> */}
                <FormItem name="sizes" label="Size">
                  <Select className="rounded" placeholder="Select size" size="large">
                    <Select.Option>Small</Select.Option>
                    <Select.Option>Medium</Select.Option>
                    <Select.Option>Large</Select.Option>
                  </Select>
                </FormItem>
                <InputComponent
                  type="number"
                  label="Price"
                  name="prices"
                  placeholder="Input Price"
                  addonAfter={`/${selectedUnit}`}
                />
                <InputComponent
                  type="number"
                  label="Stock"
                  name="stocks"
                  placeholder="Input Stock"
                  addonAfter={`${selectedUnit}`}
                />
              </div>

              <div className="flex justify-end">
                <Button icon={<PlusOutlined />}>Add Size</Button>
              </div>
            </>
          )}
          <Button
            className="mt-4"
            htmlType="submit"
            block
            type="primary"
            size="large"
            loading={isLoading}
          >
            Post
          </Button>
        </Form>
      </div>
    </div>
  );
}
