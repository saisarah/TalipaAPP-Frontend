import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
export default function Help6() {
  return (
    <Page>
      {/* <PageHeader title="TalipaAPP Money Back Guarantee">
        <div className="">
          <p>
            Shopee Guarantee is a feature that protects both buyers and Sellers
            against fraudulent transactions to keep online shopping and selling
            safe and easy.
          </p>
        </div> */}
      <PageHeader title="TalipaAPP Money Back Guarantee?" back="/" />
      <div className="my-2 bg-white">
        <div className="mx-4 flex grow flex-col p-2">
          <div className="">
            <p>
              Shopee Guarantee is a feature that protects both buyers and
              Sellers against fraudulent transactions to keep online shopping
              and selling safe and easy.
            </p>
          </div>
          <div className="">
            <p>
              It protects users by holding the payment to Sellers until the
              Buyer confirms the receipt of the order. Once the Buyer accepts
              the order, the payment will be released to the Seller.
            </p>
          </div>

          <div className="">
            <p>
              The Shopee Guarantee period is calculated based on the Seller's
              Days to Ship (DTS), Courier Delivery Time, and the Buyer
              Confirmation Time, which starts from the order creation date.
            </p>
          </div>

          <div className="">
            <p>Here's an example of how this can be calculated:</p>
            <p>
              1 (Day to Ship¹) + 1 (Courier Delivery Time²) + 2 (Buyer
              Confirmation Time³) = 4 days
            </p>
            <p>
              ¹ Days to Ship - number of days given to sellers to prepare for
              delivery
            </p>
            <p>
              ² Courier Delivery Time - the number of days it takes for the
              order to arrive. Starting from the day Courier successfully picked
              up the order from the seller and delivered it to the buyer.
            </p>
            <p>
              ³ Buyer Confirmation Time - number of days it takes the buyer to
              confirm receipt after delivery
            </p>
          </div>

          <div className="">
            <p className="font-bold">If an order has NOT been shipped:</p>
            <p>
              Sellers need to ensure that they've shipped out the order within
              the DTS period. Otherwise, the order will be automatically
              canceled and payment for non-COD orders will be refunded to the
              buyer at the end of the TalipaAPP Guarantee period.
            </p>
          </div>

          <div className="">
            <p>
              The buyer is allowed a one-time 3-day extension of the TalipaAPP
              Guarantee period per order if sellers have not yet shipped out the
              item. Select Extend TalipaAPP Guarantee on the Order Details page.
            </p>
          </div>

          <div className="">
            <p className="font-bold">If an order has been shipped:</p>
          </div>

          <div className="">
            <p>
              Buyers will need to confirm if they have received the order or
              would like to request for return/refund within the Extended
              TalipaAPP Guarantee period. Otherwise, the payment will be
              automatically released to the Seller at the end of the TalipaAPP
              Guarantee period.
            </p>
            <p>
              But if the Buyer still has not received the order before the final
              day of the extension period, and/or if the product/s received is
              either incomplete, wrong, damaged, or defective, please request
              for Return/Refund.
            </p>
            <p>
              The request should <b>ONLY</b> be made within the Extended
              TalipaAPP Guarantee Period. Otherwise, the payment will be
              released automatically to the Seller.
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
