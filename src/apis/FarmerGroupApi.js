import Http from "@/helpers/Http";

export const fetchFarmerGroups = async function () {
  const result = await Http.get("farmer-groups");
  return result.data;
};
