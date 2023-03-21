import Http from "@/helpers/Http";

export const fetchDemands = async () => {
  const { data } = await Http.get("/demands");
  return data;
};
