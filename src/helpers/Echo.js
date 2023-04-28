import Echo from "laravel-echo";
import Pusher from "pusher-js";
import Http from "./Http";

const authorizer = (channel) => {
  return {
    authorize: (socket_id, callback) => {
      Http.post("/broadcasting/auth", { socket_id, channel_name: channel.name })
        .then(({ data }) => {
          callback(null, data);
        })
        .catch((error) => {
          callback(new Error(`Error calling auth endpoint: ${error}`), {
            auth: "",
          });
        });
    },
  };
};

window.Pusher = Pusher;

export const EchoClient = new Echo({
  broadcaster: import.meta.env.VITE_BROADCASTER_DRIVER || "null",
  key: import.meta.env.VITE_PUSHER_APP_KEY,
  cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
  forceTLS: true,
  authorizer,
  // authEndpoint: Http.defaults.baseURL + "/broadcasting/auth",
});

Http.interceptors.request.use((config) => {
  config.headers["X-Socket-ID"] = EchoClient.socketId(); // Echo instance
  return config;
});

window.EchoClient = EchoClient
