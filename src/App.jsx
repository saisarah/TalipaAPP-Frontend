import { useState } from "react";
import { AppContextProvider } from "./contexts/AppContext";
import Router from "./routes/Router";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AppContextProvider
      isLogin={isLogin}
      setIsLogin={setIsLogin}
      email="customer@gmail.com"
      password="password1234"
    >
      <Router />
    </AppContextProvider>
  );
}

export default App;
