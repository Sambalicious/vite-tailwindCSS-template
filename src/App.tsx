import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "../Routes";
import "./App.css";

export function App() {
  return (
    <div className="bg-red-300 ">
      <RoutesConfig />
    </div>
  );
}

export const WrappedApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
