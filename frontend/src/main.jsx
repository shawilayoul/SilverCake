import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {CakeContextsProvider} from "./contexts/CakeContexts.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CakeContextsProvider>
      <App />
    </CakeContextsProvider>
  </React.StrictMode>
);
