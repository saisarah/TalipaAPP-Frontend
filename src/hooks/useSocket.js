import { EchoClient } from "@/helpers/Echo";
import { useEffect, useMemo } from "react";

const LOGGER_ENABLED = true

function log(...params) {
  if (LOGGER_ENABLED)
    return console.log(...params)
}

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
  log(`Listening to ${event}`)

  channel.listen(event, (...params) => {
    log(`${event}`)
    callback(...params)
  });

  return function cleanUp() {
    log(`Stop Listening to ${event}`)
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
