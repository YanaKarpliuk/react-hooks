import React from "react";
import ReactDOM from "react-dom/client";
import "./css/common.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
// UserProvide is for useContext section
import { UserProvider } from "./pages/UseContextHookPartials/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </UserProvider>
);
