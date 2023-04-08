import { useCurrentUserQuery } from "@/query/queries/useCurrentUserQuery";

export const useThreadInfo = (thread) => {

  const { data:user } = useCurrentUserQuery()

  switch (thread?.type) {
    case 'direct': {
      const { users } = thread
      const receiver = users.find(_u => _u.id != user.id)
      return { 
        avatar: receiver.profile_picture, 
        name: receiver.fullname
      };
    }

    default:
      return {}
  }
}