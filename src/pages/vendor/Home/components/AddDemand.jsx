import { postDemand } from "@/apis/DemandApi";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import VendorPageHeader from "@/components/PageHeader/VendorPageHeader";
import { useAppContext } from "@/contexts/AppContext";
import { useTitle } from "@/contexts/VendorContext";
import { getErrorMessage } from "@/helpers/Http";
import { usePostDemand } from "@/query/mutations/usePostDemand";
import { useCropOptions } from "@/query/queries/useCropsQuery";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { Button, Form, Input, Modal, notification, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { required } from "./rules";

export default function AddDemand({  form, setIsLoading, onSuccess }) {
  const navigate = useNavigate();
  const { data: crop, isLoading: fetchingCrops } = useCurrentUserQuery();
  const { viewport } = useAppContext();
  const { pathname } = useLocation();
  // const [form] = useForm()
  const { mutate, isLoading } = usePostDemand({
    onError(err) {
      notification.error({ message: getErrorMessage(err) });
    },
    onSuccess() {
      notification.success({ message: "Demands posted successfully" });
      if (pathname == "/demands/create") {
        navigate("/home?tab=demands", { replace: true });
      }
      
      if (onSuccess) {
        onSuccess()
      }
    },
  });

  useEffect(() => {
    if (setIsLoading) setIsLoading(isLoading)
  }, [isLoading])

  const handleSubmit = (data) => {
    mutate(data);
  };

  if (viewport.isLarge && pathname == "/demands/create")
    return (
      <Navigate state={{ from: pathname }} to="/home?tab=demands" replace />
    );

  return (
    <Page className="bg-white">
      <VendorPageHeader back="/home?tab=demands" title="Post Demand" />
      <Form
        form={form}
        className="min-w-full flex-shrink-0  p-4 transition"
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="description"
          rules={required()}
          label=" Description"
          tooltip="[Update this]"
        >
          <TextArea rows={4} placeholder="Type here ...." />
        </Form.Item>

        <Form.Item
          name="crop_id"
          rules={required()}
          label="Commodity"
          tooltip="[Update this]"
        >
          <Select
            placeholder="Please select the desired commodity "
            options={crop.vendor.crops.map(({ name, id }) => ({
              value: id,
              label: name,
            }))}
            size="large"
            loading={fetchingCrops}
          />
        </Form.Item>

        <Form.Item
          name="quantity"
          rules={required()}
          label="Quantity (This will be specified as kilograms)"
          tooltip="[Update this]"
        >
          <Input type="number" size="large" placeholder="KG 10000" />
        </Form.Item>

        <Form.Item
          name="budget"
          rules={required()}
          label="Budget"
          tooltip="[Update this]"
        >
          <Input type="number" size="large" placeholder="₱ 10000" />
        </Form.Item>

        <Button
          loading={isLoading}
          htmlType="submit"
          size="large"
          type="primary"
          className="mt-4 rounded lg:hidden"
          block
        >
          Submit Demand
        </Button>
      </Form>
    </Page>
  );
}

export const AddDemandModal = ({ open, setOpen }) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false)

  const closeModal = () => {
    if (isLoading) return;
    setOpen(false);
  };

  const onSuccess = () => {
    form.resetFields()
    closeModal()
  }

  return (
    <Modal
      open={open}
      centered
      bodyStyle={{ padding: 0, overflowY: "auto", maxHeight: "70vh" }}
      title="Post Demand"
      onOk={() => {
        form.submit()
      }}
      onCancel={closeModal}
      okButtonProps={{loading: isLoading}}
    >
      <AddDemand 
        setIsLoading={setIsLoading} 
        close={closeModal} 
        onSuccess={onSuccess}
        form={form} 
      />
    </Modal>
  );
};
