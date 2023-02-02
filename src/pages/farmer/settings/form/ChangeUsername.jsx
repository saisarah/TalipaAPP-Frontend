import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { Button, Input, Space } from "antd";

export default function ChangeUsername() {
  return (
    <Page className="bg-white">
      <PageHeader title="Change Username" back="/farmer/settings" />

      <Space direction="vertical flex p-4">
        <Input value="koykoy027" />
      </Space>
      <div className="flex justify-end px-4">
        <Button type="primary" className="flex-grow">
          Submit
        </Button>
      </div>
    </Page>
  );
}
