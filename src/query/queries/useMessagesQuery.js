import { fetchConversations, fetchMessages } from "@/apis/MessageApi";
import { useQuery } from "@tanstack/react-query";

export const useConversationsQuery = (id) => {
  return useQuery(fetchConversations.key(id), fetchConversations.fetcher(id));
};

export const useMessagesQuery = () => {
  return useQuery(fetchMessages.key, fetchMessages);
}
