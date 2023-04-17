import { EchoClient } from "@/helpers/Echo";
import { useEffect, useMemo } from "react";

function useChannel(channel) {
  const channels = useMemo(() => new Map(), []);

  if (!channels.has(channel)) {
    channels.set(channel, EchoClient.private(channel));
  }

  return {
    channel: channels.get(channel),
  };
}

export function listen(callback, channel, event) {
  channel.listen(event, callback);

  return function cleanUp() {
    channel.stopListening(event);
  };
}

const useSocket = ({ channel, listener, event}, dependencies = []) => {
  const { channel: channelInstance } = useChannel(channel);

  useEffect(() => {
    return listen(listener, channelInstance, event);
  }, dependencies);
};
export default useSocket;
