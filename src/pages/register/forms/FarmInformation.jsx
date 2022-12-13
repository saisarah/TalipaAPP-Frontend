import { useMutation } from "@tanstack/react-query";
import { Button, Form, Modal, notification, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { farmerRegister } from "../../../apis/AuthApi";
import FormItem from "../../../components/FormItem";
import useCropsQuery from "../../../query/queries/useCropsQuery";
import { rules } from "../rules";

export default function FarmInformation({
  personalInformationData,
  addressData,
  farmInformationData,
  setFarmInformationData,
  setStep,
}) {
  const { data: crops, isLoading: fetchingCrops } = useCropsQuery({
    select: (data) => data.map(({ name, id }) => ({ value: id, label: name })),
  });
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(farmerRegister, {
    onSuccess() {
      Modal.success({ content: "Registered Successfully" });
      navigate("/login");
    },
    onError(e) {
      Modal.error({ content: "An error occured while registering" });
    },
  });

  const handleSubmit = (data) => {
    if (isLoading) return;
    setFarmInformationData(data);
    mutate({ ...data, ...addressData, ...personalInformationData });
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={farmInformationData}
    >
      <FormItem
        inputProps={{ min: 1 }}
        label="Farm Area"
        name="farm_area"
        type="number"
        rules={rules.farm_area}
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
      />

      <FormItem rules={rules.crops} name="crops" label="Select Crops you Grow">
        <Select
          mode="multiple"
          size="large"
          className="rounded"
          options={crops}
          loading={fetchingCrops}
          placeholder="Select a crops"
        />
      </FormItem>

      <div className="mb-4 flex justify-between">
        <Button
          size="large"
          className="rounded"
          onClick={() => setStep((step) => step - 1)}
          disabled={isLoading}
        >
          Back
        </Button>
        <Button
          type="primary"
          className="rounded"
          htmlType="submit"
          size="large"
          loading={isLoading}
        >
          Next
        </Button>
      </div>
    </Form>
  );
}
