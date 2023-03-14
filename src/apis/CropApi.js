import Http from "../helpers/Http";

export const fetchCrops = async () => {
  const { data } = await Http.get("/crops");
  return data;
};
