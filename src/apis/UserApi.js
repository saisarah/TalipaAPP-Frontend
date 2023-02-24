import Http from "@/helpers/Http";

export const fetchCurrentUser = async () => {
  const { data } = await Http.get("/user");
  return data;
};
export const currentUserKey = ["user"];
