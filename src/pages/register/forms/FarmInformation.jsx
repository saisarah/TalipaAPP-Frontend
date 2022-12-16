import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, notification, Select, Upload } from "antd";
import { useState } from "react";
import FormItem from "../../../components/FormItem";
import { useRegistrationContext } from "../../../contexts/RegistrationContext";
import useCropsQuery from "../../../query/queries/useCropsQuery";
import { rules } from "../rules";

const documentType = {
  "Registered Owner": [
    "Individual Certificate of Land Ownership Award",
    "Certificate of Title or Regular Title",
    "Certificate of Ancestral Domain Title",
    "Certificate of Ancestral Land Title",
    "Certificate of Land Transfer",
    "Agricultural Sales Patent",
    "Emancipation Patent",
    "Co-ownership CLOA",
    "Homestead Patent",
    "Collective CLOA",
    "Tax Declaration",
    "Free Patent",
    "Others",
  ],
  Tenant: ["Rent Receipt"],
};

export default function FarmInformation() {
  const { setStep, data, setData } = useRegistrationContext();

  const { data: crops, isLoading: fetchingCrops } = useCropsQuery();
  const [selectedOwnershipType, setSelectedOwnershipType] = useState(
    data.ownership_type
  );
  const [documentImage, setDocumentImage] = useState(data.document);

  const handleSubmit = (farmData) => {
    if (!documentImage) {
      notification.error({
        message: "Please upload document for verification",
      });
      return;
    }
    setData((data) => ({ ...data, ...farmData, document: documentImage }));
    setStep((step) => step + 1);
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit} initialValues={data}>
      <FormItem
        inputProps={{ min: 1, addonAfter: "ha" }}
        label="Farm Area"
        name="farm_area"
        type="number"
        rules={rules.farm_area}
        tooltip="The total hectares of your farm"
        placeholder="Enter the total hectares of your farm"
      />

      <FormItem label="Farm Type" name="farm_type" rules={rules.farm_type}>
        <Select size="large" className="rounded" placeholder="Select Farm type">
          <Select.Option value="Irrigated">Irrigated</Select.Option>
          <Select.Option value="Rainfed Upland">Rainfed Upland</Select.Option>
          <Select.Option value="Rainfed Lowland">Rainfed Lowland</Select.Option>
        </Select>
      </FormItem>

      <FormItem
        rules={rules.ownership_type}
        placeholder="Enter ownership type here"
        label="Ownership Type"
        name="ownership_type"
      >
        <Select
          size="large"
          className="rounded"
          placeholder="Select Ownership Type"
          value={selectedOwnershipType}
          onChange={(e) => setSelectedOwnershipType(e)}
        >
          <Select.Option value="Registered Owner">
            Registered Owner
          </Select.Option>
          <Select.Option value="Tenant">Tenant</Select.Option>
        </Select>
      </FormItem>

      {selectedOwnershipType && (
        <>
          <FormItem
            rules={[{ required: true }]}
            label="Proof of Ownership"
            name="document_type"
          >
            <Select
              placeholder="Select Document"
              size="large"
              className="rounded"
              options={documentType[selectedOwnershipType].map((type) => ({
                value: type,
              }))}
            />
          </FormItem>

          <FormItem label="Add Photos">
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
        </>
      )}

      <FormItem rules={rules.crops} name="crops" label="Select Crops you Grow">
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
}
