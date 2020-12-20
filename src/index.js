import React from "react";
import { AuthenticationState } from "./AuthenticationContext";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationState>
      <App />
    </AuthenticationState>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
