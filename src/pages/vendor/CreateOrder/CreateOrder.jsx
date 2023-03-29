import { TRANSACTION_FEE } from "@/apis/OrderApi";
import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import Http, { getErrorMessage } from "@/helpers/Http";
import { currency } from "@/helpers/utils";
import MapPinOutline from "@/icons/heroicons/MapPinOutline";
import {
  useCurrentUserBalanceQuery,
  useCurrentUserQuery,
} from "@/query/queries/useCurrentUserQuery";
import { ArrowLeftOutlined, WalletOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Avatar, Button, notification } from "antd";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { totalReducer } from "../PostDetails/components/SetQuantityModal/SetQuantityModal";
import tranportifyImg from "./images/transportify.png";

const submitOrder = async (id, orderData) => {
  const { data } = await Http.post(`/posts/${id}/order`, orderData);
  return data;
};

const useSubmitOrder = (id) => {
  const navigate = useNavigate();
  return useMutation((data) => submitOrder(id, data), {
    onError(error) {
      notification.error({ message: getErrorMessage(error) });
    },
    onSuccess(data) {
      notification.success({ message: "Order place successfully" });
      navigate(`/orders/${data.id}`);
    },
  });
};

const useOrderTotal = (quantities, delivery_fee) => {
  const subtotal = useMemo(
    () => quantities.reduce(totalReducer, 0),
    quantities
  );
  const transaction_fee = subtotal * TRANSACTION_FEE;
  const total = subtotal + transaction_fee + delivery_fee;

  return {
    subtotal,
    transaction_fee,
    total,
  };
};

export default function CreateOrder({ order }) {
  const { quantities, post_id, address, address_note, quote } = order;

  const { data: user } = useCurrentUserQuery();

  const { data: balance, isLoading: fetchingBalance } =
    useCurrentUserBalanceQuery();

  const { total, subtotal, transaction_fee } = useOrderTotal(
    quantities,
    quote.total_fees
  );

  const { mutate, isLoading } = useSubmitOrder(post_id);

  const handleSubmit = () => {
    if (isLoading) return;
    mutate({
      quantities,
      address,
      address_note,
      vehicle_id: quote.vehicle_type.id
    });
  };

  return (
    <Page className="bg-white">
      <PageHeader
        left={
          <Button
            // onClick={() => setQuantities([])}
            type="link"
            icon={<ArrowLeftOutlined style={{ fontSize: "16px" }} />}
          />
        }
        title="Complete Order"
      />

      <div className="mt-2 border-b border-slate-100 p-2 px-4 pb-3">
        <h4 className="text-base font-semibold leading-5 text-slate-600">
          Delivering to
        </h4>
        <div className="flex items-center gap-2">
          <Avatar size="large" src={user.profile_picture} />
          <div className="flex flex-col">
            <div className="font-semibold leading-3">{user.fullname}</div>
            <div className="text-sm text-slate-600">{user.contact_number}</div>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-100 p-2 px-4 pb-3">
        <h4 className="text-base font-semibold leading-5 text-slate-600">
          Delivery Address
        </h4>
        <div className="mx-4 flex items-center gap-2">
          <MapPinOutline
            className="flex-shrink-0 text-primary"
            style={{ fontSize: "24px" }}
          />
          <div className="text-sm leading-5 text-slate-600">{address}</div>
        </div>
      </div>

      <div className="border-b border-slate-100 p-2 px-4 pb-3">
        <h4 className="text-base font-semibold leading-5 text-slate-600">
          Payment Method
        </h4>
        <div className="mx-4 flex items-center gap-2">
          <WalletOutlined
            className="text-primary"
            style={{ fontSize: "24px" }}
          />
          <div className="flex flex-col">
            <div className="font-semibold leading-3">TalipaAPP Wallet</div>
            <div className="text-sm text-slate-600">
              Balance:
              {fetchingBalance ? <i>Fetching Balance</i> : currency(balance)}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-100 p-2 px-4 pb-3">
        <h4 className="text-base font-semibold leading-5 text-slate-600">
          Delivery Method
        </h4>
        <div className="mx-4 flex items-center gap-2">
          <Avatar src={tranportifyImg} shape="square" className="h-6 w-6" />
          <div className="flex flex-col">
            <div className="font-semibold leading-3">Transportify</div>
            <div className="text-sm text-slate-600">{quote.vehicle_type.name}</div>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-100 p-2 px-4 pb-3">
        <div className="flex justify-between">
          <div>Subtotal:</div>
          <div>{currency(subtotal)}</div>
        </div>
        <div className="flex justify-between">
          <div>Delivery Charge:</div>
          <div>{currency(quote.total_fees)}</div>
        </div>
        <div className="flex justify-between">
          <div>Transaction fee:</div>
          <div>{currency(transaction_fee)}</div>
        </div>
      </div>

      <div className="border-b border-slate-100 p-2 px-4 pb-3">
        <div className="flex items-center justify-between">
          <div className="text-base font-bold">Total</div>
          <div className="text-base font-bold">{currency(total)}</div>
        </div>
      </div>

      <div className="p-4">
        <Button
          loading={isLoading}
          onClick={handleSubmit}
          block
          type="primary"
          className="rounded"
          size="large"
        >
          Place Order
        </Button>
      </div>
    </Page>
  );
}
