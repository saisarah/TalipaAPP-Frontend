import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";

export default function Help2() {
  return (
    <Page>
      {/* <PageHeader title="How do i track my order?">
        <div className="">
          <p>
            You can check the status of your orders via Orders from the TalipaAPP.
          </p>
        </div> */}
      <PageHeader title="How do i track my order?" back="/" />
      <div className="my-2 bg-white">
        <div className="mx-4 flex grow flex-col p-2">
          <div className="">
            <p>
              You can check the status of your orders via Orders from the
              TalipaAPP.
            </p>
          </div>
          <div className="">
            <p>
              All of your orders will be categorized according to their order
              statuses:
            </p>
            <p>
              <b>Pending</b> - contains unpaid orders
            </p>
            <p>
              <b>Processing</b> - contains paid, scheduled, and ready for
              pick-up orders
            </p>
            <p>
              <b>Shipped</b> - contains orders that are scheduled for delivery
            </p>
            <p>
              <b>Canceled</b> - contains orders that have been canceled
            </p>
            <p>
              <b>Completed</b> - contains orders that have been delivered
            </p>
          </div>

          <div className="">
            <p className="font-bold">
              <br></br>Tracking the delivery status of orders
            </p>
            <p>
              Once your order is under the <b>Pending</b> or <b>Processing</b>{" "}
              status, you may view detailed shipping updates and track its
              delivery status more closely.
            </p>
          </div>

          <div className="">
            <p>Note</p>
          </div>

          <div className="">
            <p>
              Orders shipped by TalipaAPP Supported Logistics will have tracking
              numbers and can be easily tracked in detail via TalipaAPP App.
            </p>
            <p>
              If your order does not have a tracking number, you may contact the
              seller directly to check your order's delivery status.
            </p>
            <p>
              For orders that are successfully delivered, if the Order Received
              button is greyed out, the shipping information status might not be
              updated yet. Kindly wait <b>within 24 - 48 hours</b> for the
              courier to update your order status.
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
