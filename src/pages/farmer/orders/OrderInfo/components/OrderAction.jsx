import { CancelOrderButton } from "@/components/Orders/CancelOrderButton";
import AcceptOrderButton from "./AcceptOrderButton";
import BookVehicleButton from "./BookVehicleButton";

export const OrderAction = ({ order, refetch }) => {

  const { order_status, id } = order

  if (order_status === "pending")
    return (
      <div className="mt-4 space-y-4">
        <CancelOrderButton id={id} />
        <AcceptOrderButton id={id} refetch={refetch} />
      </div>
    );

  if (order_status === "processing" && order.delivery_id === null)
      return (
        <BookVehicleButton id={id} refetch={refetch}/>
      )

  return null;
};
