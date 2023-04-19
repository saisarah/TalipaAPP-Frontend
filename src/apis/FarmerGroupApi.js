import Http from "@/helpers/Http";

export const fetchFarmerGroups = async function () {
  const result = await Http.get("farmer-groups");
  return result.data;
};


export const fetchGroup = async (id) => {
  const { data } = await Http.get(`/farmer-groups/${id}`);
  return data;
};

export const fetchPendingMembers = async () => {
  const { data } = await Http.get("/farmer-groups/pending-members");
  return data;
};
fetchPendingMembers.key = () => ['farmer-groups', 'pending-members']

export const fetchPendingInvitations = async () => {
  const { data } = await Http.get("/farmer-groups/invited-members");
  return data;
};
fetchPendingInvitations.key = () => ['farmer-groups', 'invited-members']