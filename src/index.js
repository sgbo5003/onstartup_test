import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

// axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.baseURL =
  "http://15.164.227.114/web/src/php/get_info.php?comment=1";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
