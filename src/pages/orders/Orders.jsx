import { ArrowLeftOutlined } from "@ant-design/icons";
import PageHeader from "../../components/PageHeader";


export default function Orders() {
  return (
    <div className="mx-auto min-h-screen max-w-md">
       <PageHeader
        left={
          <Link to="/">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Orders"
      />
    </div>
  );
}


