import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { Button, Input, Space } from "antd";
import { Link } from "react-router-dom";

export default function ChangeEmail() {
  return (
    <Page className="bg-white">
      <PageHeader title="Change E-mail" back="/farmer/settings" />

      <Space direction="vertical flex p-4">
        <Input placeholder="Enter new E-mail" />
      </Space>
      <div className="flex justify-end px-4">
        <Link
          to="/farmer/settings/change-email/verification"
          type="primary"
          className="flex-grow rounded bg-primary px-2 py-1 text-center text-white hover:text-white"
        >
          Next
        </Link>
      </div>
    </Page>
  );
}
