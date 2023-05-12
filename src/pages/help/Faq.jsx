import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { Collapse } from "antd";

const { Panel } = Collapse;

const onChange = (key) => {
  console.log(key);
};
// test
export default function Faq() {
  return (
    <Page>
      <PageHeader title="TalipaAPP FaQ" />

      <div className="flex items-center bg-white p-2 text-lg font-semibold">
        <div className="m-0 mx-2">Frequently Asked Questions</div>
      </div>

      <div className="bg-white pt-1"></div>

      <Collapse
        bordered={false}
        defaultActiveKey={["0"]}
        className="border-none"
        expandIconPosition="end"
      >
        <Panel
          header="Which courier will deliver my ordered items?"
          key="1"
          className="bg-white"
        >
          <span>
            As of now, TalipaAPP only offers Transpotify as the only courier.
          </span>
        </Panel>

        <Panel
          header="Does TalipaAPP offers vouchers to its customers?"
          key="2"
          className="bg-white"
        >
          <span>No, voucher system is not yet implemented.</span>
        </Panel>

        <Panel
          header="What payment methods do you accept?"
          key="3"
          className="bg-white"
        >
          <span>TalipaAPP only accepts cash on delivery and GCash.</span>
        </Panel>

        <Panel
          header="How long will my order take to get to me?"
          key="4"
          className="bg-white"
        >
          <span>Orders usually take 1 to 2 days to get to the recipient.</span>
        </Panel>

        <Panel
          header="Can I cancel an order that is already shipped?"
          key="5"
          className="bg-white"
        >
          <span>
            If the order has already been shipped and is on its way to you, it
            may not be possible to cancel it. However, you can contact the
            seller and ask if they can cancel the order or if they offer any
            options for returning or exchanging the item once it has been
            received.{" "}
          </span>
        </Panel>

        <Panel
          header="Can I receive a call before delivery?"
          key="6"
          className="bg-white"
        >
          <span>
            It depends on the delivery service and the seller's policy. Some
            delivery services offer the option to receive a call before
            delivery, while others do not. You can contact the seller and ask if
            they offer this service or if the delivery service they use provides
            it.{" "}
          </span>
        </Panel>

        <Panel
          header="What if I’m not available when my order arrives?"
          key="7"
          className="bg-white"
        >
          <span>
            If you're not available when your order arrives you can contact a
            someone that can receive the order in your behalf.{" "}
          </span>
        </Panel>

        <Panel
          header="Can i change my delivery address after placing my order?"
          key="8"
          className="bg-white"
        >
          <span>
            Whether you can change your delivery address after placing an order
            depends on the seller and the shipping status of the order. If the
            order has not yet been shipped, you may be able to change the
            delivery address by contacting the seller. If the order has already
            been shipped, it may not be possible to change the delivery address.{" "}
          </span>
        </Panel>

        <Panel
          header="Can I choose the courier who will deliver my order?"
          key="9"
          className="bg-white"
        >
          <span>
            You can check with the seller to see what shipping options they
            offer and if you have the ability to choose the courier for your
            delivery. If the seller does not offer the option to choose a
            courier, they may be able to provide more information on the courier
            that will be used for your delivery and the estimated delivery time.{" "}
          </span>
        </Panel>

        <Panel
          header="Can i select the vehicle that will be use to ship my order?"
          key="10"
          className="bg-white"
        >
          <span>
            This is typically handled by the courier service and is based on
            factors such as the size and weight of the shipment, the delivery
            route, and the available vehicles in the area. The courier service
            will use the most efficient and cost-effective method to deliver
            your order, which may not involve a specific type of vehicle. If you
            have specific delivery requirements, such as a preference for a
            particular type of vehicle, it's best to check with the seller and
            the courier service to see if they can accommodate your request.{" "}
          </span>
        </Panel>
      </Collapse>
    </Page>
  );
}
