import { Alert } from "antd";
import CropDemandsCard from "./components/CropDemandCard";

export const CropsDemands = () => {
  return (
    <div className="bg-white p-2">
      <Alert
        message="Find Your Market Opportunities—top products currently in demand, the percentage  shows the proportion of each vendor's total demand that is attributed to each commodity. Click it to see more details."
        type="info"
        showIcon
        closable
      />

      <CropDemandsCard
        id="1"
        name="Mango"
        percentage={20}
        request_count={10}
        avatars={[
          "https://avatars.dicebear.com/api/initials/calista+kling.svg",
          "https://avatars.dicebear.com/api/initials/sarah+oben.svg",
          "https://avatars.dicebear.com/api/initials/d%27angelo+kreiger.svg",
          "https://avatars.dicebear.com/api/initials/mackenzie+dubuque.svg",
          "https://avatars.dicebear.com/api/initials/berry+macejkovic.svg",
          "https://avatars.dicebear.com/api/initials/brandt+wyman.svg",
          "https://avatars.dicebear.com/api/initials/cydney+schroeder.svg",
          "https://avatars.dicebear.com/api/initials/celestine+christiansen.svg",
          "https://avatars.dicebear.com/api/initials/palma+king.svg",
          "https://avatars.dicebear.com/api/initials/camryn+stanton.svg",
        ]}
      />
    </div>
  );
};
