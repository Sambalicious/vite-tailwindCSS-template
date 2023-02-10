import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "../Routes";
import "./App.css";

function App() {
  return (
    <div className="bg-red-300 ">
      <RoutesConfig />
    </div>
  );
}

const WrappedApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default WrappedApp;
