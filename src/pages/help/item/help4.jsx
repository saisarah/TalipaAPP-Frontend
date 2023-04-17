import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
export default function Help4() {
  return (
    <Page>
      {/* <PageHeader title="What is the order received button?">
        <div className="">
          <p>
            The Order Received button allows you, our buyers, to confirm that
            you have received your orders and that it is as advertised and in
            good condition. This adds an additional layer of protection from bad
            shopping experiences for you; allowing you to fully enjoy our Money
            Back Guarantee!
          </p>
        </div> */}
      <PageHeader title="What is the order received button?" back="/" />
      <div className="my-2 bg-white">
        <div className="mx-4 flex grow flex-col p-2">
          
            <p>
              The Order Received button allows you, our buyers, to confirm that
              you have received your orders and that it is as advertised and in
              good condition. This adds an additional layer of protection from
              bad shopping experiences for you; allowing you to fully enjoy our
              Money Back Guarantee!
            </p>
          
          <div className="">
            <p>On this Page</p>
            <p>
              I. My order is in good condition. How do I confirm receipt of my
              order?
            </p>
            <p>II. I have a problem with the item I received. What do I do?</p>
            <p>III. FAQs</p>
          </div>

          <div className="">
            <p>
              I. My order is in good condition. How do I confirm receipt of my
              order?
            </p>
          </div>

          <div className="">
            <p>
              Once you have received your order or the order status of your item
              has changed to Delivered, please follow the steps below to confirm
              receipt of your order:
            </p>
          </div>
          {/* insert image instruction */}
          <div className="">
            <p>Important!</p>
          </div>

          <div className="">
            <p>
              If you have an issue with the item(s), file for a return/refund
              request and do not confirm. Note that you will not be able to
              request a return/refund for the confirmed items(s).
            </p>
          </div>

          <div className="">
            <p>II. I have a problem with the item I received. What do I do?</p>
          </div>

          <div className="font-bold">
            <p>
              Please take note of the following valid reasons for return/refund
              requests:
            </p>
          </div>

          <div className="">
            <p className="font-bold">Return Request</p>
            <p>
              <b>Counterfeit:</b> Item delivered appears to be fake or
              unauthentic.
            </p>
            <p>
              <b>Not As Advertised:</b> Item received does not match what was
              shown in the online product listing.
            </p>
          </div>

          <div className="">
            <p className="font-bold">Refund Request</p>
            <p>
              <b>Missing Item:</b> If you received an empty package or filler
              items.
            </p>
            <p>
              <b>Incomplete Delivery:</b> Package delivered is incomplete or
              missing essential items.
            </p>
            <p>
              <b>Package Not Received:</b> If your order is tagged as delivered
              but you didn't receive a package.
            </p>
          </div>

          <div className="">
            <p>
              When selecting a return reason, it's important to select the
              correct return reason and add additional details in the Online
              Return Form for a faster and more accurate evaluation of the
              request.
            </p>
            <p>
              Returns may be rejected when the request is non-compliant with the
              policy. Please take note that the following are invalid
              refund/return reasons.
            </p>
          </div>

          <div className="">
            <p>Change of Mind</p>
            <p>
              The buyer suddenly decide they don't want/need the item received.
            </p>
            <p>Disappointment with the item</p>
            <p>
              The buyer failed to read the product page and is disappointed with
              the item received.
            </p>
          </div>

          <div className="">
            <p>III. FAQs</p>
          </div>

          <div className="">
            <p>
              1. I received my order but it is incomplete. Should I clicl Order
              Received?
            </p>
            <p>
              If you have received an incomplete, wrong, or damaged item(s),
              please request a return/refund for the item. Once you have filed a
              return/refund request, you may click on Order Received to confirm
              that the order item(s) is correct, in good condition, and do not
              need to be returned/refunded.
            </p>
            <p>
              <b>Important:</b> You cannot return/refund an item after you have
              confirmed its receipt.
            </p>
          </div>

          <div className="">
            <p>
              2. How many days do I have to confirm the receipt of my order?
            </p>
            <p>
              The allowed period for you to confirm the receipt of your order is
              4 days.
            </p>
          </div>

          <div className="">
            <p>3. What will happen if I do not click on Order Received?</p>
            <p>
              The order will automatically be confirmed at the end of the
              guarantee period (4 days) if you do not click order received or
              request return/refund.{" "}
            </p>
          </div>

          <div className="">
            <p>
              4. Will I be able to file a return/refund after I click the Order
              Received button?
            </p>
            <p>
              No, once you confirm the receipt of your order, you can no longer
              file a return or refund request for that item. So, make sure to
              double-check your order before confirming!
            </p>
          </div>

          <div className="">
            <p>
              5. I have returned one of my item(s). Can I confirm the receipt of
              my other items?
            </p>
            <p>
              Yes, the Orde Received button will appear so you can confirm the
              receipt of the other items in your order. You will not be able to
              confirm the receipt of items that are pending return/refund.
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
