import Http from "../helpers/Http";

export const fetchRegions = async () => {
  const { data } = await Http.get("/philippine-addresses/regions");
  return data;
};

export const fetchProvinces = async (region) => {
  const { data } = await Http.get("/philippine-addresses/provinces", {
    params: { region },
  });
  return data;
};

export const fetchCities = async (region, province) => {
  const { data } = await Http.get("/philippine-addresses/cities", {
    params: { region, province },
  });
  return data;
};

export const fetchBarangays = async (region, province, city) => {
  const { data } = await Http.get("/philippine-addresses/barangays", {
    params: { region, province, city },
  });
  return data;
};
