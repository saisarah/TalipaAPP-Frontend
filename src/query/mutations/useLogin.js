import { login } from "@/apis/AuthApi"
import { currentUserKey } from "@/apis/UserApi"
import { setAuthorization } from "@/helpers/Http"
import { useMutation, useQueryClient } from "@tanstack/react-query"


export const useLogin = function () {

    const queryClient = useQueryClient()

    return useMutation(login, {
        onSuccess({token, user}) {
            setAuthorization(token)
            queryClient.setQueryData(currentUserKey, user)
        }
    })
}