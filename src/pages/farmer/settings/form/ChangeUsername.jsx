import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { Button, Input, Space } from "antd";

export default function ChangeUsername() {
  const { data: user } = useCurrentUserQuery();
  return (
    <Page className="bg-white">
      <PageHeader title="Change Username" back="/farmer/settings" />

      <Space direction="vertical flex p-4">
        <Input defaultValue={user.username} />
      </Space>
      <div className="flex justify-end px-4">
        <Button type="primary" className="flex-grow">
          Submit
        </Button>
      </div>
    </Page>
  );
}
