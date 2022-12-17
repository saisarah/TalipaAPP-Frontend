import { Button, Form, Upload } from "antd";
import { useState } from "react";
import FormItem from "../../../components/FormItem";
import { useRegistrationContext } from "../../../contexts/RegistrationContext";
import { UploadOutlined } from "@ant-design/icons";

export const VendorInformation = () => {
  const { data, setStep } = useRegistrationContext();
  const [documentImage, setDocumentImage] = useState(data.document);

  const handleSubmit = (vendorData) => {
    setData((data) => ({ ...data, ...vendorData, document: documentImage }));
    setStep((step) => step + 1);
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <FormItem
        label="Market"
        name="public_market"
        type="number"
        placeholder="Enter the market where you sell your commodities."
        requiredMark="optional"
      />

      <FormItem label="Upload proof of your identity">
        <Upload
          onRemove={() => setDocumentImage(null)}
          fileList={documentImage && [documentImage]}
          beforeUpload={(file) => {
            setDocumentImage(file);
            return false;
          }}
          listType="picture"
          className="grid grid-cols-1"
        >
          <Button icon={<UploadOutlined />} size="large" block>
            Click to Upload
          </Button>
        </Upload>
      </FormItem>

      <div className="mb-4 flex justify-between">
        <Button
          size="large"
          className="rounded"
          onClick={() => setStep((step) => step - 1)}
        >
          Back
        </Button>
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
};
