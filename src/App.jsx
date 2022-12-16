import { ConfigProvider } from "antd";
import { AppContextProvider } from "./contexts/AppContext";
import ReactQueryProvider from "./query/ReactQueryProvider";
import Router from "./routes/Router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";
import { setAuthorization } from "./helpers/Http";

ConfigProvider.config({
  theme: {
    primaryColor: "#94BF73",
  },
});

const isAndroid = import.meta.env.VITE_PLATFLORM;

function App() {
  return (
    <ReactQueryProvider>
      <AppContextProvider isAndroid={isAndroid}>
        <Router />
      </AppContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryProvider>
  );
}

export default App;
