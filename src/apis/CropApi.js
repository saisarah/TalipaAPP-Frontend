import Http from "../helpers/Http";

export const fetchCrops = async () => {
  const { data } = await Http.get("/crops");
  return data;
};

export const fetchCropsDemands = async () => {
  const { data } = await Http.get("/crops/demands")
  return data
}
fetchCropsDemands.key = () => ["crops", "demands"]