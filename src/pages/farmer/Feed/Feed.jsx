import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";

export default function Feed()
{
  return (
    <div className="bg-white max-w-md min-h-screen  mx-auto">
      <PageHeader 
        left={<Link to="/farmer"><ArrowLeftOutlined style={{fontSize: '16px'}}/></Link>}
        title="Home" 
      />
      
      <div className="sticky top-0 h-16 shadow-md bg-white grid grid-cols-2 text-lg">
        <div className="flex items-center justify-center border-b border-primary text-primary">
          For Sale
        </div>

        <div className="flex items-center justify-center">
          Demands
        </div>
      </div>

      <div className="p-4 flex gap-4">
        <div className="flex flex-col items-center gap-1">
          <div className="h-12 w-12 bg-slate-400 rounded-full"></div>
          <span className="text-xs">Mango</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="h-12 w-12 bg-slate-400 rounded-full"></div>
          <span className="text-xs">Banana</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="h-12 w-12 bg-slate-400 rounded-full"></div>
          <span className="text-xs">Pineapple</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="h-12 w-12 bg-slate-400 rounded-full"></div>
          <span className="text-xs">Garlic</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="h-12 w-12 bg-slate-400 rounded-full"></div>
          <span className="text-xs">Onion</span>
        </div>
      </div>

    </div>
  )
}