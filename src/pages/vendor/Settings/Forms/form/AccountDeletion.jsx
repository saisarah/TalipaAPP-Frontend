import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { Button, Input, Modal, Space } from "antd";
import { useState } from "react";

export default function AccountDeletion() {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };
  return (
    <Page className="bg-white">
      <PageHeader title="Account Deletion" back="/farmer/settings" />

      <Space direction="vertical flex p-4">
        <h1>Permanently delete account</h1>
        <p className="text-justify">
          If you want to permanently delete your TalipaApp account, let us know.
          Once the deletion process begins, you have 30 days before it
          permanently deleted. And you won't be able to reactivate your account
          or retrieve any of the content or information you have added.
        </p>
      </Space>
      <div className="flex justify-end px-4">
        <Button type="primary" className="flex-grow" onClick={showModal}>
          Delete account
        </Button>

        <Modal
          // title="Please enter your password to continue"
          open={open}
          onOk={hideModal}
          onCancel={hideModal}
          closable={false}
          okText="Submit"
          cancelText="Cancel"
        >
          <h1>Verify if it's you</h1>
          <p>Please enter your password to continue</p>
          <Input.Password placeholder="Enter your password" />
        </Modal>
      </div>
    </Page>
  );
}
