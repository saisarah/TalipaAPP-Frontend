import { fetchCurrentGroup } from "@/apis/GroupApi";
import PageHeader from "@/components/PageHeader/PageHeader";
import { TabLinks } from "@/components/TabLink";
import { Button, Spin, App } from "antd";
import { useTabAdvance } from "@/helpers/hooks";
import Http, { getErrorMessage } from "@/helpers/Http";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Forum from "../components/Forum";
import Join from "../components/Join";
import SuggestedGroups from "../SuggestedGroups/SuggestedGroups";

const fetchPendingGroup = async () => {
  const { data } = await Http.get("/farmer-group/pending");
  return data;
};

const usePendingGroup = () => {
  return useQuery(["farmer-group", "pending"], fetchPendingGroup);
};

const cancelRequest = async (farmer_group_id) => {
  const { data } = await Http.delete(`/farmer-groups/${farmer_group_id}/cancel`)
  return data
}

const useCancelRequest = (option = {}) => {
  const queryClient = useQueryClient()
  return useMutation(cancelRequest, {
    ...option,
    onSuccess() {
      queryClient.resetQueries(fetchCurrentGroup.key());
      option?.onSuccess()
    }
  })
}

export const PendingRequest = () => {
  const { modal, notification } = App.useApp()
  const { data, isLoading } = usePendingGroup();
  const { mutateAsync: cancelRequest } = useCancelRequest({
    onSuccess() {},
    onError(err) {
      notification.error({ message: getErrorMessage(err) })
    }
  })

  const handleCancelRequest = () => {
    modal.confirm({
      content: "Are you sure to cancel request in this group?",
      async onOk() {
        await cancelRequest(data.id)
      }
    })
  }

  const { outlet, tabs } = useTabAdvance({
    join: {
      title: "Join",
      element: data && <Join data={data} />,
    },
    forum: {
      title: "Forum",
      element: <Forum />,
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center py-16">
        <Spin tip="Fetching Pending Requests" />
      </div>
    );

  if (!data) return <SuggestedGroups />;

  return (
    <div className="app-size bg-white">
      <PageHeader back="/farmer" title="Pending Request" />

      <img
        className="h-[80px] w-[100%] max-w-md flex-shrink-0 bg-slate-300 object-cover"
        src={data.image_url}
      />
      <div className="my-6 text-center">
        <h1>{data.name}</h1>
        <h1>{data.type}</h1>
        <p>Members</p>
        <Button onClick={handleCancelRequest} className="mx-auto">Cancel Request</Button>
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
};
