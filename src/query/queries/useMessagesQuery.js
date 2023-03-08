import { fetchConversations } from "@/apis/MessageApi";
import { useQuery } from "@tanstack/react-query";

export const useConversationsQuery = (id) => {
  return useQuery(fetchConversations.key(id), fetchConversations.fetcher(id));
};
