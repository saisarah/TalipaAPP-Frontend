import PageHeader from "@/components/PageHeader/PageHeader";
import { TabLinks } from "@/components/TabLink";
import { useTabAdvance } from "@/helpers/hooks";
import Http, { getErrorMessage } from "@/helpers/Http";
import { useFarmerGroupQuery } from "@/query/queries/useFarmerGroupsQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, notification, Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import Forum from "../components/Forum";
import Join from "../components/Join";
import { BackLink } from "@/components/PageHeader/components/BackLink";

const joinGroup = async (id) => {
  const { data } = await Http.post(`/farmer-groups/${id}/join`);
  return data;
};

const useJoinGroup = (id, option) => {
  return useMutation(() => joinGroup(id), option);
};

export default function GroupInfo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { mutate, isLoading: isJoining } = useJoinGroup(id, {
    onSuccess() {
      queryClient.resetQueries(["farmer-group", "pending"]);
      navigate("/farmer/groups", { replace: true });
    },
    onError(err) {
      notification.error({ message: getErrorMessage(err) });
    },
  });

  const { data, isLoading } = useFarmerGroupQuery(id);

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

  if (isLoading) {
    return (
      <div className="flex justify-center py-16">
        <Spin tip="Fetching group info" />
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <PageHeader
        className="sticky md:static"
        back="/farmer/groups"
        title="Group"
      />

      <img
        className="aspect-video sm:h-32 lg:h-48 w-[100%] flex-shrink-0 bg-slate-300 object-cover"
        src={data.image_url}
      />

      <div className="my-6 text-center">
        <h1>{data.name}</h1>
        <h1>{data.type}</h1>
        <p>Members</p>
        <Button
          loading={isJoining}
          onClick={() => mutate()}
          type="primary"
          className="mx-auto"
        >
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
