import { useAppContext } from "@/contexts/AppContext";
import { Avatar, Button } from "antd";


export const InviteUserItem = ({ profile_picture, fullname, onSendInvite, id }) => {
  const { userID } = useAppContext()

  if (userID === id) return null;

  return (
    <div className="flex items-center gap-3 bg-white p-3">
      <Avatar src={profile_picture} />
      <span className="flex-grow font-semibold">{fullname}</span>
      <Button type="primary" size="small" onClick={() => onSendInvite(id)}>
        Invite
      </Button>
    </div>
  );
};