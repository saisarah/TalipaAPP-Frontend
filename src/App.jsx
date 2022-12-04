import { ConfigProvider } from "antd";
import { AppContextProvider } from "./contexts/AppContext";
import ReactQueryProvider from "./query/ReactQueryProvider";
import Router from "./routes/Router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useEffect } from "react";
import { setAuthorization } from "./helpers/Http";

ConfigProvider.config({
  theme: {
    primaryColor: "#16a34a", //bg-green-600
  },
});

const isAndroid = import.meta.env.VITE_PLATFLORM;

function App() {

  useEffect(() => {
    if (localStorage.getItem('auth_token')) {
      setAuthorization(localStorage.getItem('auth_token'))
    }
  }, [])

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
