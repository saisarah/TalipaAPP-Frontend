import { ConfigProvider, App as AntdApp } from "antd";
import { AppContextProvider } from "./contexts/AppContext";
import ReactQueryProvider from "./query/ReactQueryProvider";
import Router from "./routes/Router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StyleProvider } from "@ant-design/cssinjs";

const isAndroid = import.meta.env.VITE_PLATFORM === "android";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#739559",
          colorLink: "inherit",
          colorLinkHover: "inherit",
          colorLinkActive: "inherit",
        },
      }}
    >
      <StyleProvider hashPriority="high">
        <AntdApp>
          <ReactQueryProvider>
            <AppContextProvider isAndroid={isAndroid}>
              <Router />
            </AppContextProvider>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </ReactQueryProvider>
        </AntdApp>
      </StyleProvider>
    </ConfigProvider>
  );
}

export default App;
