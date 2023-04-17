import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";

export default function Help3() {
  return (
    <Page>
      {/* <PageHeader title="Why can't i return my order?">
        <div className="font-bold">
          <p>
            Your return/refund button is disabled due to one of the following
            reasons:
          </p>
        </div> */}
      <PageHeader title="Why can't i return my order?" back="/" />
      <div className="my-2 bg-white">
        <div className="mx-4 flex grow flex-col p-2">
          <div className="text-xl font-bold">
            <p>
              Your return/refund button is disabled due to one of the following
              reasons:
            </p>
          </div>
          <div className="">
            <p>
              1. You have already confirmed the receipt of your order by click
              the <b>"Order Received" button.</b>
            </p>
            <p>
              2. The item is already beyond the money-back guarantee period (4
              days)
            </p>
            <p>
              3. The item is non-returnable. Since the item posted/bought is a
              Perishable goods.
            </p>
          </div>

          <div className="font-bold">
            <p>
              Should you have problems with the item you received and the
              return/refund button is not available, you can:
            </p>
          </div>

          <div className="">
            <p>1. Avail of the warranty of the item, if applicable.</p>
            <p>
              2. Contact the seller to discuss the other possible options. To
              learn how to chat with the seller, click{" "}
              <div className="text-blue-600">here</div>{" "}
            </p>
            <p className="text-blue-600">3. Chat with Customer Care.</p>
          </div>
        </div>
      </div>
    </Page>
  );
}
