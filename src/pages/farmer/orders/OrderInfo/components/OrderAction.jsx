import { CancelOrderButton } from "@/components/Orders/CancelOrderButton";
import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";
import AcceptOrderButton from "./AcceptOrderButton";

export const OrderAction = ({ order, refetch }) => {

  const { order_status, id } = order

  if (order_status === "pending")
    return (
      <div className="mt-4 space-y-4">
        <CancelOrderButton id={id} />
        <AcceptOrderButton id={id} refetch={refetch} />
      </div>
    );

  return null;
};
