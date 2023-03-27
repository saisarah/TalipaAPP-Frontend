import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { Button, Input, Space } from "antd";
import { Link } from "react-router-dom";

export default function ChangeEmailVerification() {
  return (
    <Page className="bg-white">
      <PageHeader title="Change E-mail" back="/farmer/settings/change-email" />

      <Space direction="vertical flex p-4">
        <span>We send a 4 digits verification code on this Email</span>
        <span>vill*******27@gmail.com</span>
        <Input placeholder="****" />
      </Space>
      <div className="flex justify-end px-4">
        <Link
          to="/farmer/settings/change-email/verification"
          type="primary"
          className="flex-grow rounded bg-primary px-2 py-1 text-center text-white hover:text-white"
        >
          Submit
        </Link>
      </div>
    </Page>
  );
}
