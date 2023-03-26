import Http from "@/helpers/Http";

export const fetchDemands = async (params) => {
  const { data } = await Http.get("/demands", { params });
  return data;
};

export const postDemand = async (data) => {
  const { data: result } = await Http.post("/demands", data);
};
