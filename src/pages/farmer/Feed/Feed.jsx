import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link, useParams, useSearchParams } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import { useState } from "react";
import ForSale from "./ForSale";
import CreateInfo from "./CreateInfo";
import { Demands } from "./Demands";

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

export default function Feed() {
  const [params, setParams] = useSearchParams()
  const feed = params.get("feed")
  const defaultActive = "demands"
  // const [active, setActive] = useState("demands");
  const active = (tab) => {
    if (tab === feed) return true
    if (tab === defaultActive & feed != "sale" && feed != "create") return true;
    return false;
  }

  return (
    <div className="mx-auto min-h-screen max-w-md  bg-slate-50">
      <PageHeader
        left={
          <Link to="/farmer">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Home"
      />

      <div className="sticky top-0 grid h-16 grid-cols-3 bg-white text-lg shadow-md">
        <Link to='?feed=demands'
          className={`flex items-center justify-center ${active("demands") ? "border-b border-primary text-primary" : ""
            }`}
        >
          Demands
        </Link>
        <Link  to='?feed=sale'
          // onClick={() => setActive("for_sale")}
          className={`flex items-center justify-center ${active("sale") ? "border-b border-primary text-primary" : ""
            }`}
        >
          For Sale
        </Link>
        <Link to='?feed=create'
          // onClick={() => setActive("create")}
          className={`flex items-center justify-center ${active("create") ? "border-b border-primary text-primary" : ""
            }`}
        >
          Create Post
        </Link>
      </div>

      {active("demands") && <Demands />}
      {active("sale") && <ForSale />}
      {active("create") && <CreateInfo />}
    </div>
  );
}
