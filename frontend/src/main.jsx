
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CakeContextsProvider from "./contexts/CakeContexts.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <CakeContextsProvider>
    <App />
  </CakeContextsProvider>
);
