import { TabLinks } from "@/components/TabLink";
import { useTitle } from "@/contexts/VendorContext";
import { useTabAdvance } from "@/helpers/hooks";
import { Demands } from "./Demand";
import ForSale from "./ForSale";

const homeTab = {
  sale: {
    element: <ForSale />,
    title: "For Sale",
  },
  demands: {
    element: <Demands />,
    title: "Demands",
  },
};

export const Home = () => {
  useTitle("Home");

  const { outlet, tabs } = useTabAdvance(homeTab);

  return (
    <div>
      <TabLinks
        className="sticky top-0 z-10 grid h-16 grid-cols-2 bg-white text-lg shadow-md lg:flex lg:gap-4"
        defaultClassName="flex items-center justify-center px-6"
        activeClassName="border-b border-primary text-primary"
        tabs={tabs}
      />
      {outlet}
    </div>
  );
};
