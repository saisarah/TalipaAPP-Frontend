import Http from "@/helpers/Http";

export const fetchDemands = async (params) => {
  const { data } = await Http.get("/demands", { params });
  return data;
};
