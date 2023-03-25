import Page from "@/components/Page";
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import { currency } from "@/helpers/utils";
import { useVerifyPayment } from "@/query/mutations/useVerifyPayment";
import { CheckCircleFilled } from "@ant-design/icons";
import { Link, useSearchParams } from "react-router-dom";


export default function CashInResultPage() {
  const [params] = useSearchParams();
  const paymentIntentId= params.get("payment_intent_id")

  const { data, isLoading } = useVerifyPayment(paymentIntentId)

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Page className="flex flex-col items-center justify-center bg-primary-accent-2">
      <CheckCircleFilled className="text-white" style={{ fontSize: "48px" }} />
      <div className="mt-6 text-center text-white">
        <div className="text-4xl font-semibold">
          {currency(parseFloat(data.amount))}
        </div>
        <div className="mt-1 text-slate-200">Cash in Successfully</div>
        <div className="mt-1 text-slate-200">
          Thank you for trusting TalipaAPP
        </div>
      </div>

      <Link
        to="/wallet"
        replace
        className="mt-8 block rounded bg-white py-3 px-8 text-center"
      >
        Go to wallet
      </Link>
    </Page>
  );
}
