import { Button } from "antd";
import Invitation from "./components/Invitation";
import PageHeader from "@/components/PageHeader/PageHeader";

/**
 * Endpoint: /farmer/group
 * Only accesible when the farmer is invited to a group.
 */

export default function GroupInvitation() {
  return (
    <div className="app-size">
      <PageHeader back="/farmer" title="Group" />
      <Invitation
        profileName="Sarah Grace Oben"
        src=""
        organizationProduct="Maharlika Organic Food Producers and Farmers Association"
      />
      <div className="mx-auto flex justify-center gap-5">
        <Button className="btn-primary" type="primary">
          Accept
        </Button>
        <Button className="btn-primary text-primary ring-1 ring-primary">
          Decline
        </Button>
      </div>
    </div>
  );
}
