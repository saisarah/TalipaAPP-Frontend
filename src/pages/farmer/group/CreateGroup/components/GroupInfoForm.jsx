import FormItem from "@/components/FormItem";
import { UploadOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Select, Upload } from "antd";
import { grouptype } from "../post-data";
import { rules } from "../rules";

export default function GroupInfoForm({ setStep }) {
  return (
    <div className="p-4">
      <Form layout="vertical" onFinish={() => setStep((step) => step + 1)}>
        <FormItem label="Name" name="name" rules={rules.name} />
        <FormItem label="Address" name="address" rules={rules.address} />
        <FormItem label="Group type" name="grouptype" rules={rules.grouptype}>
          <Select
            placeholder="Select Group type"
            size="large"
            options={grouptype}
          />
        </FormItem>

        <FormItem
          type="number"
          label={
            <span>
              Year Founded <span className="text-gray-400">(optional)</span>
            </span>
          }
          name="details"
          size="large"
          className="rounded"
          placeholder="Add a short description"
        >
          <DatePicker className="w-full" size="large" picker="year" />
        </FormItem>
        <FormItem label="Authorization Letter" rules={rules.auth}>
          <Upload className="grid grid-cols-1" maxCount={1}>
            <Button icon={<UploadOutlined />} size="large" block>
              Click to Upload
            </Button>
          </Upload>
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
    </div>
  );
}
