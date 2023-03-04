import PageHeader from "@/components/PageHeader";
import { TabLinks } from "@/components/TabLink";
import { useTabAdvance } from "@/helpers/hooks";
import { Button } from "antd";
import { useParams } from "react-router-dom";
import Forum from "../components/Forum";
import Join from "../components/Join";

export default function GroupInfo() {
  const { id } = useParams();
  const { outlet, tabs } = useTabAdvance({
    join: {
      title: "Join",
      element: <Join />,
    },
    forum: {
      title: "Forum",
      element: <Forum />,
    },
  });

  return (
    <div className="app-size bg-white">
      <PageHeader back="/farmer/groups" title="Group" />

      <div className="h-[80px] w-[100%] max-w-md flex-shrink-0 bg-slate-300"></div>
      <img
        className="mx-auto h-[75px] w-[75px] max-w-md flex-shrink-0 rounded-full bg-slate-300 ring"
        style={{ marginTop: "-45px" }}
      />
      <div className="my-6 text-center">
        <h1>Totong Lipay Farmers Association</h1>
        <h1>Association</h1>
        <p>200 Members</p>
        <Button type="primary" className="mx-auto">
          Join
        </Button>
      </div>

      <TabLinks
        activeClassName="border-b border-primary text-primary"
        defaultClassName="flex items-center justify-center"
        className="sticky top-0 grid h-16 grid-cols-2 bg-white text-lg shadow-md"
        tabs={tabs}
      />
      {outlet}
    </div>
  );
}
