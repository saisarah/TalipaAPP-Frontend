import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import { Button } from "antd";
import { CancelOrderButton } from "./components/CancelOrderButton";

export const OrderAction = ({ status }) => {
  const { data: user } = useCurrentUserQuery();

  if (status === "pending")
    return (
      <div className="mt-4 space-y-4">
        <CancelOrderButton />
        {user.user_type === "farmer" && (
          <Button size="large" type="primary" block>
            Accept Order
          </Button>
        )}
      </div>
    );

  return null;
};

