import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space, Upload } from "antd";
import { Link } from "react-router-dom";
import PageHeader from "../../../../components/PageHeader";
import { grouptype } from "./post-data";
import { rules } from "./rules";
import TextArea from "antd/lib/input/TextArea";
import useCropsQuery from "../../../../query/queries/useCropsQuery";
import FormItem from "../../../../components/FormItem";
import { useState } from "react";

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

export default function CreateGroup() {
  const { data: crops, isLoading: fetchingCrops } = useCropsQuery({
    select: (data) => data.map(({ name, id }) => ({ value: id, label: name })),
  });

  return (
    <div className="mx-auto min-h-screen max-w-md bg-slate-50">
      <PageHeader
        left={
          <Link to="/farmer/groups">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Create Group"
      />

      <div className="p-4">
        <Form layout="vertical">
          <FormItem label="Name" name="name" rules={rules.name} />
          <FormItem label="Address" name="address" rules={rules.address} />
          <FormItem label="Group type" name="grouptype" rules={rules.grouptype}>
            <Select placeholder="Select Group type" options={grouptype} />
          </FormItem>

          <FormItem label="Year Founded (optional)" name="details">
            <Input.TextArea
              size="large"
              className="rounded"
              placeholder="Add a short description"
            />
          </FormItem>
          <FormItem label="Authorization Letter">
            <Upload className="grid grid-cols-1">
              <Button icon={<UploadOutlined />} size="large" block>
                Click to Upload
              </Button>
            </Upload>
          </FormItem>
          <Button
            className="mt-2 w-full rounded bg-[#739559] text-lg font-bold text-white  "
            size={"large"}
          >
            Next
          </Button>
        </Form>
      </div>
    </div>
  );
}
