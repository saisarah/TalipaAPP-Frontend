import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
export default function Help7() {
  return (
    <Page>
      {/* <PageHeader title="I need help with my order">
        <div>
          <h1>I need help with my order</h1>
        </div>
        <div className="">
          <p>
            As part of the TalipaAPP Money Back Guarantee, we promise to protext
            you, our buyers, from bad shopping experiences; allowing you to
            worry less and shop more.
          </p>
        </div> */}
      <PageHeader title="I need help with my order?" back="/" />
      <div className="my-2 bg-white">
        <div className="mx-4 flex grow flex-col p-2">
          <div className="">
            <p>
              As part of the TalipaAPP Money Back Guarantee, we promise to
              protext you, our buyers, from bad shopping experiences; allowing
              you to worry less and shop more.
            </p>
          </div>
          <div className="">
            <p>
              If you need help regarding your order, please check the helpful
              tips below:
            </p>
          </div>

          <div className="">
            <p>
              I have a problem with the item I received but there's no
              Return/Refund button.
            </p>
          </div>

          <div className="">
            <p>
              The order status is delivered but I did not receive the package.
            </p>
          </div>

          <div className="">
            <p>I want to report a courier.</p>
          </div>

          <div className="">
            <p>I want to request a sales invoice.</p>
          </div>

          <div className="">
            <p>Have other concerns?</p>
          </div>

          <div className="">
            <p>
              For other related concerns, click on the button below to connect
              with our Customare Care Service.
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
