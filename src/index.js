import React from "react";
import ReactDOM from "react-dom/client";
import "./css/common.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// UserProvide is for useContext section
import { UserProvider } from "./pages/UseContextHookPartials/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </UserProvider>
);
