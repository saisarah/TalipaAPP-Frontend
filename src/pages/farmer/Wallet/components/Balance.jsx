import { currency } from "@/helpers/utils";
import { useCurrentUserBalanceQuery } from "@/query/queries/useCurrentUserQuery";
import { Skeleton } from "antd";

export const Balance = () => {
    const { data, isLoading } = useCurrentUserBalanceQuery();
  
    return (
      <div className="text-center">
        <span className="font-light text-slate-800">CURRENT WALLET BALANCE</span>
        {isLoading ? (
          <div className="py-4">
            <Skeleton.Input active className="rounded-full"/>
          </div>
        ) : (
          <div className="text-[40px] font-bold text-black">
            <span>{currency(data)}</span>
            {/* <sup className=" top-[-20px] text-xl font-light"> ₱</sup> */}
          </div>
        )}
      </div>
    );
  };