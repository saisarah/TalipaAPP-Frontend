import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { Button, Input, Space } from "antd";

export default function ChangePassword() {
  return (
    <Page className="bg-white">
      <PageHeader title="Change Password" back="/farmer/settings" />
      
      <Space direction="vertical flex p-4">
        <Input.Password placeholder="Input Old Password" />
        <Input.Password placeholder="Input New Password" />
        <Input.Password placeholder="Confirm Password" />
      </Space>
      <div className="flex justify-end px-4">
        <Button type="primary" className="flex-grow">
          Submit
        </Button>
      </div>
    </Page>
  );
}
