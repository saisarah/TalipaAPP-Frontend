import { currentUserKey } from "@/apis/UserApi";
import { clearAuthorization } from "@/helpers/Http";
import { QuestionCircleTwoTone } from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";
import { Modal } from "antd";

export const useLogoutModal = () => {
  const queryClient = useQueryClient();
  const confirmLogout = () => {
    Modal.confirm({
      icon: <QuestionCircleTwoTone />,
      onOk() {
        localStorage.clear();
        clearAuthorization()
        queryClient.setQueryData(currentUserKey, null);
      },
      content: "Are you sure to logout?",
    });
  };

  return {
    confirmLogout,
  };
};
