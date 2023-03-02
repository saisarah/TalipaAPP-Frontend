import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import { TabLinks } from "@/components/TabLink";
import { useTabAdvance } from "@/helpers/hooks";
import { Button } from "antd";
import { Link } from "react-router-dom";
import SuggestedGroups from "./components/SuggestedGroups";
import GroupInvitation from "./GroupInvitation";
import groupIllustrationImg from "./images/group_illustration.png";

const HAS_INVITATION = false;

const CreateGroup = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-slate-100 py-16">
      <img src={groupIllustrationImg} />
      <span className="text-lg font-bold">Create Group</span>
      <span className="px-2 text-center">
        Farmer groups are group of individual farmers, an association,
        cooperative or any legal entity with a common farming interest.
      </span>
      <Link to="/farmer/groups/new">
        <Button className="rounded" size="large">
          Create
        </Button>
      </Link>
    </div>
  );
};

export default function Group() {
  // const [active, setActive] = useState("join");
  const { tabs, outlet } = useTabAdvance({
    join: {
      element: <SuggestedGroups />,
      title: "Join",
    },
    create: {
      element: <CreateGroup />,
      title: "Create",
    },
  });

  if (HAS_INVITATION) return <GroupInvitation />;

  return (
    <Page className="bg-slate-50">
      <PageHeader back="/farmer" title="Group" />

      <TabLinks
        className="sticky top-0 z-10 grid h-16 grid-cols-2 bg-white text-lg shadow-md"
        activeClassName="border-b border-primary text-primary"
        defaultClassName="flex items-center justify-center"
        tabs={tabs}
      />

      {outlet}
    </Page>
  );
}
