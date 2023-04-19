import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useFarmerGroupsQuery } from "@/query/queries/useFarmerGroupsQuery";
import GroupItem from "./components/GroupItem";
import LoadingGroups from "./components/LoadingGroups";

export default function SuggestedGroups() {
  const { data, isLoading } = useFarmerGroupsQuery();

  return (
    <Page>
      <PageHeader back="/farmer" title="Group" />
      {isLoading ? (
        <LoadingGroups />
      ) : (
        <div className=" divide-slate-200">
          {data.map((item) => (
            <GroupItem key={item.id} {...item} />
          ))}
        </div>
      )}
    </Page>
  );
}
