import { login } from "@/apis/AuthApi";
import { currentUserKey } from "@/apis/UserApi";
import { setAuthorization } from "@/helpers/Http";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogin = function ({ onSuccess, onError }) {
  const queryClient = useQueryClient();

  return useMutation(login, {
    onSuccess({ token, user }) {
      setAuthorization(token);
      queryClient.setQueryData(currentUserKey, user);
      if (onSuccess) onSuccess({ token, user });
    },

    onError,
  });
};
