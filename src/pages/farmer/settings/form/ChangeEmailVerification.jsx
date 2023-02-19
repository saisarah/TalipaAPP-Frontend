import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { Button, Input, Space } from "antd";
import { Link } from "react-router-dom";

export default function ChangeEmail() {
  
  return (
    <Page className="bg-white">
      <PageHeader title="Change E-mail" back="/farmer/settings/change-email" />

      <Space direction="vertical flex p-4">
        <span>We send a 4 digits verification code on this Email</span>
        <span>vill*******27@gmail.com</span>
        <Input placeholder="****" />
        
      </Space>
      <div className="flex justify-end px-4">
        <Link to="/farmer/settings/change-email/verification" type="primary" className="flex-grow bg-primary text-white px-2 py-1 rounded text-center hover:text-white" >
          Submit
        </Link>
      </div>
    </Page>
  );
}