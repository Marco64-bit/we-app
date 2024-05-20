import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { root } from ".";

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
