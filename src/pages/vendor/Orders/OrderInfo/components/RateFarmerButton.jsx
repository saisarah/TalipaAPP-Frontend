import Http, { getErrorMessage } from "@/helpers/Http";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App, Button, Form, Input, Modal, Rate } from "antd";
import { useState } from "react";

const fetchFarmerReview = async (farmer_id) => {
  const { data } = await Http.get(`/farmers/${farmer_id}/rate`);
  return data;
};
fetchFarmerReview.key = (farmer_id) => ["farmers", parseInt(farmer_id), "rate"]

const rateFarmer = async (farmer_id, data) => {
  const { data: result } = await Http.post(`/farmers/${farmer_id}/rate`, data);
  return result;
};

const useRateFarmer = (farmer_id, option = {}) => {
  const queryClient = useQueryClient()
  return useMutation((data) => rateFarmer(farmer_id, data), {
    ...option,
    onSuccess(data) {
      queryClient.resetQueries(fetchFarmerReview.key(farmer_id))
      option?.onSuccess(data)
    }
  });
};

const useFarmerReview = (farmer_id) => {
  return useQuery(
    fetchFarmerReview.key(farmer_id),
    () => fetchFarmerReview(farmer_id),
    {
      initialData: { rate: 0, comment: "" },
    }
  );
};

const RateFarmerModal = ({ farmer, open, setOpen }) => {
  const { notification } = App.useApp()
  const { data } = useFarmerReview(farmer.id);
  const { mutate, isLoading } = useRateFarmer(farmer.id, {
    onSuccess() {
      setOpen(false)
      notification.success({ message: "Review submitted successfully" })
    },
    onError(err) {
      notification.error({ message: getErrorMessage(err) })
    }
  });

  const handleSubmit = (data) => {
    if (isLoading) return;
    mutate(data);
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      title="Rate Farmer"
      footer={false}
      centered
      destroyOnClose
    >
      <Form
        layout="vertical"
        size="large"
        initialValues={data}
        onFinish={handleSubmit}
        className="flex flex-col items-center py-4"
      >
        <img
          className="aspect-square w-24 rounded-full"
          src={farmer.profile_picture}
        />
        <div className="mt-2 text-xl font-bold">{farmer.fullname}</div>
        <div>Rate your experience</div>

        <Form.Item name="rate" className="mb-0">
          <Rate />
        </Form.Item>

        <div className="mt-2 text-sm">Leave your comments</div>

        <Form.Item name="comment" className="mb-0 w-full">
          <Input.TextArea className="mt-2 w-full" />
        </Form.Item>

        <Button
          loading={isLoading}
          htmlType="submit"
          type="primary"
          className="mt-2"
          block
        >
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default function RateFarmerButton({ farmer }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="mt-4"
        type="primary"
        size="large"
        block
      >
        Rate Farmer
      </Button>
      <RateFarmerModal open={open} setOpen={setOpen} farmer={farmer} />
    </>
  );
}
