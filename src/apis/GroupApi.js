import Http from "@/helpers/Http";

export const fetchCurrentGroup = async () => {
  const { data } = await Http.get("/farmer-group");
  return data;
};
fetchCurrentGroup.key = () => ['farmer-group']