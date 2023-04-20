import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";

export default function Help1() {
  return (
    <Page>
      {/* <PageHeader title="Welcome To TalipaAPP: A new guide for buyers.">
        <div>
          <h1>Welcome To TalipaAPP: A new guide for buyers.</h1>
        </div> */}
      <PageHeader
        title="Welcome To TalipaAPP: A new guide for buyers"
        back="/"
      />
      <div className="my-2 bg-white text-black">
        <div className="mx-4 flex flex-grow flex-col p-2">
          <div className="text-black">
            <h3 className="text-center text-lg font-semibold text-[#739559]">
              Welcome to TalipaAPP!
            </h3>
            <p>
              This is the start of your shopping journey on TalipaAPP! <br></br>
              We want to give you the best possible online shopping experience,
              so we've prepared everything you need to know.
            </p>
          </div>
          <br></br>
          <div>
            <h3 className="font-semibold text-[#739559]">
              2 Reasons to Checkout from TalipaAPP
            </h3>
            <p>
              Aside from the guaranteed safe and enjoyable online shopping,
              below are more reasons to trust TalipaAPP.
            </p>
          </div>
          <br></br>
          <div className="">
            <p className="font-medium">Fast Shipping</p>
            <img src="/assets/images/transportify.png" className="" />
            <p>
              Since TalipaAPP is powered by Transportify, expect a fast delivery
              experience. Its goal is to lower the costs of traditional delivery
              logistics methods, which includes first to last-mile delivery, of
              enterprises, while still providing an exemplary quality of
              service.
            </p>
          </div>
          <br></br>
          <div>
            <p className="font-medium">Money Back Guarantee</p>
            <img src="/assets/images/mbg.png" className="" />
            <p>
              Be refunded if you don't receive the item you ordered or if there
              is a problem with the condition of the item you received.
            </p>
          </div>
          <br></br>
          <div>
            <h3 className="text font-bold">Shop and Save</h3>
            <img src="/assets/images/sas.png" className="" />
            <p>
              Shop and save, at the same time, through TalipaAPP's valuable
              items posted directly by the farmer.
            </p>
          </div>

          <br></br>
          <div>
            <h3 className="flex font-bold">Be constantly updated.</h3>
            <img src="/assets/images/bcu.png" className="" />
            <p>
              Know where your orders are and when you'll get them with our
              real-time order tracking feature.
            </p>
          </div>
          <br></br>
          <div className="font-bold">
            <h3>Have other concerns?</h3>
          </div>

          <div>
            <p>
              For other related concerns, click on the button below to connect
              with our{" "}
              <span className="text-blue-400">Customer Care Service .</span>
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
