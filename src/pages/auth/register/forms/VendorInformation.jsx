import { Button, Form, notification, Select, Upload } from "antd";
import { useState } from "react";
import FormItem from "../../../../components/FormItem";
import { useRegistrationContext } from "../../../../contexts/RegistrationContext";
import { UploadOutlined } from "@ant-design/icons";
import { rules } from "../rules";
import useCropsQuery from "../../../../query/queries/useCropsQuery";

export const VendorInformation = () => {
  const { data, setStep, setData } = useRegistrationContext();
  const [documentImage, setDocumentImage] = useState(data.document);
  const { data: crops, isLoading: fetchingCrops } = useCropsQuery();

  const handleSubmit = (vendorData) => {
    if (!documentImage) {
      notification.error({
        message: "Please upload document for verification",
      });
      return;
    }

    setData((data) => ({ ...data, ...vendorData, document: documentImage }));
    setStep((step) => step + 1);
  };

  return (
    <Form layout="vertical" initialValues={data} onFinish={handleSubmit}>
      <FormItem
        label="Market"
        name="public_market"
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

      <FormItem rules={rules.crops} name="crops" label="Select Crops you Sell">
        <Select
          mode="multiple"
          size="large"
          className="rounded"
          options={crops?.map(({ name, id }) => ({ value: id, label: name }))}
          loading={fetchingCrops}
          placeholder="Select a crops"
        />
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
