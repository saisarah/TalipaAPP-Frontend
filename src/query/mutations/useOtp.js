import { sendRegisterOtp } from "@/apis/AuthApi";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useOtp = () => {
  const [throttle, setThrottle] = useState(0);

  const { mutate, isLoading } = useMutation(sendRegisterOtp, {
    onSuccess() {
      console.log("Send Success fully");
      setThrottle(60);
    },

    onError(e) {
      console.log(e);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setThrottle((throttle) => {
        return Math.max(0, throttle - 1);
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { throttle, sendOtp: mutate, isSending: isLoading };
};
