import { fetchPendingInvitations } from "@/apis/FarmerGroupApi";
import FarmerPageHeader from "@/components/PageHeader/FarmerPageHeader";
import Http, { getErrorMessage } from "@/helpers/Http";
import useDebounce from "@/hooks/useDebounce";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App, Avatar, Button, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EmptyQuery } from "./components/EmptyQuery";
import { EmptyResult } from "./components/EmptyResult";
import { InviteUserItem } from "./components/InviteUserItem";
import { SearchingUser } from "./components/SearchingUser";

const searchUser = async (params) => {
  const { data } = await Http.get("/users/search", { params });
  return data;
};

const inviteUser = async (farmer_id) => {
  const { data } = await Http.post("/farmer-groups/members/invite", { farmer_id });
  return data
}

const useSearchUserQuery = (params) => {
  return useQuery(["users", "search", params], () => searchUser(params), {
    enabled: params?.query !== "",
  });
};

const useInviteUser = (option = {}) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  return useMutation(inviteUser, {
    ...option,
    onSuccess(data) {
      queryClient.resetQueries(fetchPendingInvitations.key())
      navigate("/farmer/groups/invitations", { replace: true })
      option?.onSuccess(data)
    }
  })
}

export default function InviteMember() {
  const { modal, notification } = App.useApp();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 750);
  const { mutateAsync: inviteUser } = useInviteUser({
    onSuccess() {
      notification.success({ message: "Invitations sent successfully" })
    },
    onError(err) {
      notification.error({ message: getErrorMessage(err) })
    }
  })

  const { isLoading, data } = useSearchUserQuery({
    type: "farmer",
    query: debouncedQuery,
  });

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSendInvite = (user_id) => {
    modal.confirm({
      content: "Are you sure to invite this user?",
      async onOk() {
        await inviteUser(user_id)
      },
    });
  };

  return (
    <div>
      <FarmerPageHeader
        title="Invite Member"
        back="/farmer/groups/invitations"
      />
      <div className="p-3">
        <Input.Search
          size="large"
          placeholder="Search Member"
          onChange={handleSearch}
        />
        {query === "" ? (
          <EmptyQuery />
        ) : isLoading ? (
          <SearchingUser />
        ) : data.length === 0 ? (
          <EmptyResult />
        ) : (
          <div className="mt-3 flex flex-col divide-y divide-slate-100 overflow-hidden rounded-lg border border-slate-300">
            {data.map((user) => (
              <InviteUserItem
                onSendInvite={handleSendInvite}
                key={user.id}
                {...user}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
