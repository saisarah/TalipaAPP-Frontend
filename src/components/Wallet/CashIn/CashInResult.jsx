import Page from "@/components/Page";
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import { currency } from "@/helpers/utils";
import { useVerifyPayment } from "@/query/mutations/useVerifyPayment";
import { CheckCircleFilled } from "@ant-design/icons";
import { Link, useParams, useSearchParams } from "react-router-dom";

const usePaymentId = (type) => {
  const [params] = useSearchParams();
  const { id } = useParams()
  if (type === "paymongo")
    return params.get("payment_intent_id")
  if (type === "bux")
    return id

  return params.get("token")
}

export default function CashInResult({ type, walletLink }) {
  const paymentIntentId = usePaymentId(type)
  const { data, isLoading } = useVerifyPayment(paymentIntentId, type)

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
        to={walletLink}
        replace
        className="mt-8 block rounded bg-white py-3 px-8 text-center"
      >
        Go to wallet
      </Link>
    </Page>
  );
}