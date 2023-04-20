import { Avatar, Button, Input, Modal, Rate } from "antd";
import { useState } from "react";

export default function RateFarmerButton() {
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
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        title="Rate Farmer"
        footer={false}
        centered
      >
        <div className="flex flex-col items-center py-4">
          <img
            className="aspect-square w-24 rounded-full"
            src="https://avatars.dicebear.com/api/initials/lenard+mangay-ayam.svg"
          />
          <div className="mt-2 text-xl font-bold">Lenard Mangay-ayam</div>
          <div>Rate your experience</div>
          <Rate />
          <div className="mt-2 text-sm">Leave your comments</div>
          <Input.TextArea className="mt-2" />
          <Button type="primary" className="mt-2" block>
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
}
