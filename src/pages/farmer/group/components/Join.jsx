import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

export default function Join() {
  return (
    <div className="p-6">
      <h1>Description</h1>
      <p>
        The Federation of free farmers (FFF) is currently one of the largest and
        most effective non-governmental organizations of rural workers in the
        Philippines. It was organized in 1953 by a group of Catholic laymen soon
        after the break-up of the Communist-led revolutionary movement in the
        country during the term of President Ramon Magsaysay.
      </p>
      <h1>Contact Information</h1>
      <div className="d-flex mb-2">
        <MailOutlined />
        <span className="mx-4">freefarm@freefarm.org</span>
      </div>
      <div className="d-flex mb-2">
        <PhoneOutlined />
        <span className="mx-4">(+632) 8-647 1451</span>
      </div>
      <div className="d-flex mb-2">
        <EnvironmentOutlined />
        <span className="mx-4">
          30-F, 6th Avenue, Brgy. Socorro, Cubao, Quezon City, Philippines.
        </span>
      </div>
    </div>
  );
}
