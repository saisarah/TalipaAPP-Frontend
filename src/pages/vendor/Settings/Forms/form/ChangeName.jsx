import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { Button, Input, Space } from "antd";

export default function ChangeName() {
  return (
    <Page className="bg-white">
      <PageHeader title="Change Name" back="/farmer/settings" />

      <Space direction="vertical flex p-4">
        <Input defaultValue="Joshua Villanueva" />
      </Space>
      <div className="flex justify-end px-4">
        <Button type="primary" className="flex-grow">
          Submit
        </Button>
      </div>
    </Page>
  );
}
