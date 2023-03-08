import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

export default function Join({ data }) {
  return (
    <div className="p-6">
      <h1>Description</h1>
      <p>{data.description}</p>
      <h1 className="text-xl font-bold">Contact Information</h1>
      <div className="d-flex mb-2">
        <MailOutlined />
        <span className="mx-4">{data.email}</span>
      </div>
      <div className="d-flex mb-2">
        <PhoneOutlined />
        <span className="mx-4">{data.contact_no}</span>
      </div>
      <div className="d-flex mb-2">
        <EnvironmentOutlined />
        <span className="mx-4">{data.address}</span>
      </div>
    </div>
  );
}
