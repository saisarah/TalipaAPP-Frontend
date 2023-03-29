import {
  currentUserBalanceKey,
  currentUserCompleteAddressKey,
  currentUserKey,
  fetchCurrentUser,
  fetchCurrentUserAddress,
  fetchCurrentUserBalance,
  fetchCurrentUserCompleteAddress,
} from "@/apis/UserApi";
import Cache from "@/helpers/Cache";
import { clearAuthorization } from "@/helpers/Http";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useCurrentUserBalanceQuery = () => {
  return useQuery(currentUserBalanceKey, fetchCurrentUserBalance);
};

export const useCurrentUserCompleteAddresQuery = () => {
  return useQuery(
    currentUserCompleteAddressKey,
    fetchCurrentUserCompleteAddress
  );
};

export const useCurrentUserAddress = (option) => {
  return useQuery(["user", "address"], fetchCurrentUserAddress, option);
};

export const useCurrentUserQuery = () => {
  const queryClient = useQueryClient();

  return useQuery(currentUserKey, fetchCurrentUser, {
    retry(failureCount, error) {
      if (failureCount >= 3) return false;
      console.log("user ", error);
      if (error?.response?.status === 401 || error === "Unauthorized") {
        return false;
      }

      return true;
    },
    // staleTime: 1000 * 60 * 60 * 2,
    // cacheTime: 1000 * 5,
    initialData() {
      return Cache.get(currentUserKey);
    },

    onSuccess(data) {
      Cache.set(currentUserKey, data, 1000 * 60 * 60 * 2);
    },

    onError(error) {
      if (error?.response?.status === 401 || error === "Unauthorized") {
        clearAuthorization();
        queryClient.setQueryData(currentUserKey, null);
      }
    },
  });
};
