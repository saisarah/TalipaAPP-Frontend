import { Link } from "react-router-dom";
import ForSale from "./ForSale";
import CreateInfo from "./CreateInfo";
import { Demands } from "./Demands";
import { useTab } from "@/helpers/hooks";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  const { isActive } = useTab(["demands", "sale", "create"], "demands");

  return (
    <div className="mx-auto min-h-screen max-w-md  bg-slate-50">
      <PageHeader back="/farmer" title="Home" />

      <div className="sticky top-0 grid h-16 grid-cols-3 bg-white text-lg shadow-md">
        <TabLink tab="demands" isActive={isActive}>
          Demands
        </TabLink>
        <TabLink tab="sale" isActive={isActive}>
          For Sale
        </TabLink>
        <TabLink tab="create" isActive={isActive}>
          Create Post
        </TabLink>
      </div>

      {isActive("demands") && <Demands />}
      {isActive("sale") && <ForSale />}
      {isActive("create") && <CreateInfo />}
    </div>
  );
}

function CropsFilter() {
  return (
    <div className="flex gap-4 p-4">
      <div className="flex flex-col items-center gap-1">
        <div className="h-12 w-12 rounded-full bg-slate-400"></div>
        <span className="text-xs">Mango</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="h-12 w-12 rounded-full bg-slate-400"></div>
        <span className="text-xs">Banana</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="h-12 w-12 rounded-full bg-slate-400"></div>
        <span className="text-xs">Pineapple</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="h-12 w-12 rounded-full bg-slate-400"></div>
        <span className="text-xs">Garlic</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="h-12 w-12 rounded-full bg-slate-400"></div>
        <span className="text-xs">Onion</span>
      </div>
    </div>
  );
}

function TabLink({ children, tab, isActive }) {
  return (
    <Link
      to={`?tab=${tab}`}
      className={`flex items-center justify-center ${
        isActive(tab) ? "border-b border-primary text-primary" : ""
      }`}
      replace
    >
      {children}
    </Link>
  );
}
