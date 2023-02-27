import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import Http, { getErrorMessage } from "@/helpers/Http";
import { currency } from "@/helpers/utils";
import MapPinOutline from "@/icons/heroicons/MapPinOutline";
import {
  useCurrentUserBalanceQuery,
  useCurrentUserCompleteAddresQuery,
  useCurrentUserQuery,
} from "@/query/queries/useCurrentUserQuery";
import { ArrowLeftOutlined, WalletOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { Avatar, Button, notification } from "antd";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import tranportifyImg from "./images/transportify.png";

const TRANSACTION_FEE = .08
const DELIVERY_FEE = 200

const submitOrder = async (id, quantities) => {
  const { data } = await Http.post(`/posts/${id}/order`, {
    quantities
  });
  return data
}

export default function CreateOrder({ id, setQuantities, prices, quantities }) {
  const navigate = useNavigate()
  const { data: user } = useCurrentUserQuery();
  const { data: balance, isLoading: fetchingBalance } =
    useCurrentUserBalanceQuery();
  const { data: address, isLoading: fetchingAddress } =
    useCurrentUserCompleteAddresQuery();
  const subtotal = useMemo(() => {
    return quantities.reduce( (acm, {quantity, variant}) => {
      const price = prices.find(price => price.variant === variant)
      return acm + (price.value*quantity)
    }, 0)
  }, [quantities]);
  const transaction_fee = subtotal * TRANSACTION_FEE
  const total = subtotal + transaction_fee + DELIVERY_FEE
  const { mutate, isLoading } = useMutation(() => submitOrder(id, quantities), {
    onError(error) {
      notification.error({ message: getErrorMessage(error) })
    },
    onSuccess(data) {
      notification.success({ message: "Order place successfully" });
      navigate(`/orders/${data.id}`)
    }
  })
  

  const handleSubmit = () => {
    if (isLoading) return;
    mutate()
  }

  return (
    <Page className="bg-white">
      <PageHeader
        left={
          <Button
            onClick={() => setQuantities([])}
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
          <div className="text-sm leading-5 text-slate-600">
            {fetchingAddress ? <i>Fetching Address</i> : address}
          </div>
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
          <Avatar src={tranportifyImg} shape="square" className="w-6 h-6" />
          <div className="flex flex-col">
            <div className="font-semibold leading-3">Transportify</div>
            <div className="text-sm text-slate-600">Get by January 23-25</div>
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
          <div>{currency(DELIVERY_FEE)}</div>
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
        <Button loading={isLoading} onClick={handleSubmit} block type="primary" className="rounded" size="large">
          Place Order
        </Button>
      </div>
    </Page>
  );
}
