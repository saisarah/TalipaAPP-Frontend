import { ConfigProvider } from "antd";
import { useState } from "react";
import { AppContextProvider } from "./contexts/AppContext";
import Router from "./routes/Router";

ConfigProvider.config({
  theme: {
    primaryColor: '#16a34a', //bg-green-600
  }
})

const isAndroid = import.meta.env.VITE_PLATFLORM;

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AppContextProvider
      isLogin={isLogin}
      setIsLogin={setIsLogin}
      email="customer@gmail.com"
      password="password1234"
      isAndroid={isAndroid}
    >
      <Router />
    </AppContextProvider>
  );
}

export default App;
