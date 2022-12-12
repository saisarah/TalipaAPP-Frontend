import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Invitation from "./components/GroupInvitation";
import { Button } from "antd";

/**
 * Endpoint: /farmer/group
 * Only accesible when the farmer is invited to a group.
 */



export default function GroupInvitation() {
  return (
    <div className="mx-auto min-h-screen max-w-md">
        <PageHeader
        left={
          <Link to="/farmer">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Group"
      />
        <Invitation profileName="Sarah Grace Oben" src="" organizationProduct="Maharlika Organic Food Producers and Farmers Association"/>
        <div className="flex gap-5 mx-auto justify-center">
        <Button className="btn-primary" type="primary">Accept</Button> 
        <Button className="btn-primary ring-1 ring-primary text-primary">Decline</Button>
        </div>
    </div>
  );
}
