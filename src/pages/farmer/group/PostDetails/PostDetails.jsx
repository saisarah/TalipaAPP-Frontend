import { ArrowLeftOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import PageHeader from "../../../../components/PageHeader"


export const PostDetails = () => {
    return (
        <div className="mx-auto min-h-screen max-w-md bg-slate-50">
      <PageHeader
        left={
          <Link to="/farmer/home">
            <ArrowLeftOutlined style={{ fontSize: "16px" }} />
          </Link>
        }
        title="Sarah Oben's Post"
      />
      <div className="flex flex-col items-center gap-2 bg-white py-4 mt-2 mx-2"></div>
    </div>
    )
}