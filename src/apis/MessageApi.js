import Http from "@/helpers/Http";

export const fetchMessages = async () => {
  const { data } = await Http.get("/messages");
  return data;
};
fetchMessages.key = ["messages"];

export const fetchConversations = async (id) => {
  const { data } = await Http.get(`/messages/${id}`);
  return data;
};
fetchConversations.key = (id) => ["messages", parseInt(id)];
fetchConversations.fetcher = (id) => () => fetchConversations(id);

export const sendMessage = async function (id, content) {
  const result = await Http.post(`/messages/${id}`, { content });
  return result.data;
};
