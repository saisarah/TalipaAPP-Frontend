import CreateInfo from "./CreateInfo";
import ForSale from "./ForSale";

import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import TabLink from "@/components/TabLink";
import { useTab } from "@/helpers/hooks";
import { Demands } from "./demand/Demands";

export default function Home() {
  const { isActive } = useTab(["demands", "sale", "create"]);

  return (
    <Page className="bg-slate-50">
      <PageHeader back="/farmer" title="Home" />

      <div className="sticky top-0 grid h-16 grid-cols-3 bg-white text-lg shadow-md">
        <TabLink
          tab="demands"
          className="flex items-center justify-center"
          activeClassName="border-b border-primary text-primary"
          text="Demand"
        />
        <TabLink
          tab="sale"
          className="flex items-center justify-center"
          activeClassName="border-b border-primary text-primary"
          text="For Sale"
        />
        <TabLink
          tab="create"
          className="flex items-center justify-center"
          activeClassName="border-b border-primary text-primary"
          text="Create Post"
        />
      </div>

      {isActive("demands") && <Demands />}
      {isActive("sale") && <ForSale />}
      {isActive("create") && <CreateInfo />}
    </Page>
  );
}

// function TabLink({ children, tab, isActive }) {
//   return (
//     <Link
//       to={`?tab=${tab}`}
//       className={`flex items-center justify-center ${
//         isActive(tab) ? "border-b border-primary text-primary" : ""
//       }`}
//       replace
//     >
//       {children}
//     </Link>
//   );
// }
