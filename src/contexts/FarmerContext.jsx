import { EchoClient } from "@/helpers/Echo";
import { useFarmerGroupInvitationSent } from "@/hooks/listeners/useFarmerGroupInvitationSent";
import { useFarmerGroupRequestApprovedListener } from "@/hooks/listeners/useFarmerGroupRequestApprovedListener";
import { useFarmerGroupRequestSubmitted } from "@/hooks/listeners/useFarmerGroupRequestSubmitted";
import { useMessageReceived } from "@/hooks/listeners/useMessageReceived";
import { App } from "antd";
import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./AppContext";

export const FarmerContent = createContext({});

export const FarmerContextProvider = ({ children, user }) => {
  const { setContext, setUserID } = useAppContext()
  useMessageReceived(user.id);
  useFarmerGroupRequestApprovedListener(user.id)
  useFarmerGroupRequestSubmitted(user.id)
  useFarmerGroupInvitationSent(user.id)
  useEffect(() => {
    setContext("farmer")
    setUserID(user.id)
    return () => {
      setContext("guest")
      setUserID(null)
    }
  }, [])

  const navigate = useNavigate()
  const { modal } = App.useApp()

  useEffect(() => {
      console.log(`Listening for calling users.${user.id}`)
      EchoClient.private(`users.${user.id}`)
        .listenForWhisper('calling', e => {
            modal.confirm({
              content: "Someone is calling",
              okText: "Accept",
              cancelText: "Reject",
              onOk() {
                window.location.href = '/farmer/meet?token=' + e.token
                // navigate('/farmer/meet', { state: e.token })
              }
            })
        })
    }, [user.id])

  return (
    <FarmerContent.Provider value={{ user }}>{children}</FarmerContent.Provider>
  );
};

export const useFarmerContext = () => {
  return useContext(FarmerContent);
};
