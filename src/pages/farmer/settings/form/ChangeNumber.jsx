import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { Button, Input, Space } from "antd";

export default function ChangeNumber() {
  const { data: user } = useCurrentUserQuery();

  return (
    <Page className="bg-white">
      <PageHeader title="Change Number" back="/farmer/settings" />

      <Space direction="vertical flex p-4">
        <Input defaultValue={user.contact_number} prefix="+63 " />
      </Space>
      <div className="flex justify-end px-4">
        <Button type="primary" className="flex-grow">
          Submit
        </Button>
      </div>
    </Page>
  );
}
