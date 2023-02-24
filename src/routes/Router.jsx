import { BrowserRouter, HashRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";

const platform = import.meta.env.VITE_PLATFLORM;

export default function Router() {
  const Router = platform === "android" ? HashRouter : BrowserRouter;

  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}
