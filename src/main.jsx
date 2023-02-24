import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/preflight.css";
import "antd/dist/antd.variable.min.css";
import "./styles/main.css";
import Http from "./helpers/Http";
import { queryClient } from "./query/ReactQueryProvider";

window.Http = Http;
window.queryClient = queryClient;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
