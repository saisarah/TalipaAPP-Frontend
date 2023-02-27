import Page from "@/components/Page";
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import Http from "@/helpers/Http";
import { currency } from "@/helpers/utils";
import { CheckCircleFilled } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams, useSearchParams } from "react-router-dom";

const verifyPayment = async (id) => {
  const { data } = await Http.get(`/payment/${id}`);
  return data;
};

export default function CashInSuccess() {
  const [params] = useSearchParams();

  const { data, isLoading } = useQuery(
    ["payment", params.get("payment_intent_id")],
    () => verifyPayment(params.get("payment_intent_id"))
  );

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
        to="/farmer/wallet"
        replace
        className="mt-8 block rounded bg-white py-3 px-8 text-center"
      >
        Go to wallet
      </Link>
    </Page>
  );
}
