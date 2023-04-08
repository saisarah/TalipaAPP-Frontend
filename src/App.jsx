import { ConfigProvider } from "antd";
import { AppContextProvider } from "./contexts/AppContext";
import ReactQueryProvider from "./query/ReactQueryProvider";
import Router from "./routes/Router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StyleProvider } from "@ant-design/cssinjs";

// ConfigProvider.config({
//   theme: {
//     primaryColor: "#739559",
//   },
// });

const isAndroid = import.meta.env.VITE_PLATFORM === "android";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#739559",
        },
      }}
    >
      <StyleProvider hashPriority="high">
        <ReactQueryProvider>
          <AppContextProvider isAndroid={isAndroid}>
            <Router />
          </AppContextProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </ReactQueryProvider>
      </StyleProvider>
    </ConfigProvider>
  );
}

export default App;
