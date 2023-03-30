import Http from "../helpers/Http";

export const createPost = async (_data) => {
  const { data } = await Http.post("/posts", _data);
  return data;
};

export const fetchPosts = async (crop_ids) => {
  const { data } = await Http.get("/posts", { params: {crop_ids} });
  return data;
};

export const fetchPost = async (id) => {
  const { data } = await Http.get(`/posts/${id}`);
  return data;
};

export const fetchUserPosts = async (id) => {
  const { data } = await Http.get(`/users/${id}/posts`);
  return data;
};
