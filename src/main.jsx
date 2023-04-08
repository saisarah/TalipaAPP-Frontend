import { toFormData } from "axios";
import moment from "moment";
import ReactDOM from "react-dom/client";
import App from "./App";
import config from "./config";
import Cache from "./helpers/Cache";
import Http from "./helpers/Http";
import { queryClient } from "./query/ReactQueryProvider";
import "./styles/main.less";

window.Http = Http;
window.queryClient = queryClient;
window.Cache = Cache;
window.moment = moment;
window.toFormData = toFormData;
window.config = config

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
