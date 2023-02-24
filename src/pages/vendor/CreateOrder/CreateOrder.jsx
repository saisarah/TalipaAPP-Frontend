import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { currency } from "@/helpers/utils";
import MapPinOutline from "@/icons/heroicons/MapPinOutline";
import useCurrentUserQuery from "@/query/queries/useCurrentUserQuery";
import { ArrowLeftOutlined, WalletOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider } from "antd";

export default function CreateOrder({ id, setQuantities }) {
  const { data: user } = useCurrentUserQuery();

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
          <Avatar size="large" />
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
            Bldg2a 2u10 MRH NHA Site 4, Brgy.188 Tala Caloocan City, NCR
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
              Balance: {currency(25000)}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-100 p-2 px-4 pb-3">
        <h4 className="text-base font-semibold leading-5 text-slate-600">
          Delivery Method
        </h4>
        <div className="mx-4 flex items-center gap-2">
          <Avatar shape="square" />
          <div className="flex flex-col">
            <div className="font-semibold leading-3">Transportify</div>
            <div className="text-sm text-slate-600">Get by January 23-25</div>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-100 p-2 px-4 pb-3">
        <div className="flex justify-between">
          <div>Subtotal:</div>
          <div>{currency(2000)}</div>
        </div>
        <div className="flex justify-between">
          <div>Delivery Charge:</div>
          <div>{currency(450)}</div>
        </div>
      </div>

      <div className="border-b border-slate-100 p-2 px-4 pb-3">
        <div className="flex items-center justify-between">
          <div className="text-base font-bold">Total</div>
          <div className="text-base font-bold">{currency(2400)}</div>
        </div>
      </div>

      <div className="p-4">
        <Button block type="primary" className="rounded" size="large">
          Place Order
        </Button>
      </div>
    </Page>
  );
}
