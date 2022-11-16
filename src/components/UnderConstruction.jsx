import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export default function UnderConstruction({ showHomeBtn = false }) {
  return (
    <Result
      className="my-8"
      status="404"
      title="Sorry, Page is currently under construction"
      subTitle="We will try to fix this as soon as we can."
      extra={showHomeBtn && <Link to='/'><Button type="primary">Back to Home</Button></Link>}
    />
  );
}
