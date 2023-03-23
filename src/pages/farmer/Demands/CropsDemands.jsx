import { useCropsDemandsQuery } from "@/query/queries/useCropsQuery";
import { Alert, Spin } from "antd";
import CropDemandsCard from "./components/CropDemandCard";

export const CropsDemands = () => {
  const { data, isLoading } = useCropsDemandsQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center py-16">
        <Spin tip="Fetching demands" />
      </div>
    );
  }

  const total = data.reduce((acm, crop) => acm + parseFloat(crop.demands_sum_budget), 0)

  return (
    <div className="bg-white p-2">
      <Alert
        message="Find Your Market Opportunities—top products currently in demand, the percentage  shows the proportion of each vendor's total demand that is attributed to each commodity. Click it to see more details."
        type="info"
        showIcon
        closable
      />

      {data.map((crop) => (
        <CropDemandsCard
          key={crop.id}
          id={crop.id}
          name={crop.name}
          percentage={crop.demands_sum_budget*100/total}
          request_count={crop.demands.length}
          avatars={crop.demands.map(demand => demand.author.profile_picture)}
        />
      ))}
    </div>
  );
};