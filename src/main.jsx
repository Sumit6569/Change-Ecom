import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Contex from "./Utills/Contex.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "./store/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-fbdf2t2gxogacayo.us.auth0.com"
    clientId="FgQgj3I6BciNFJpiip17BfY6dMMNnWHy"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Contex>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Contex>
  </Auth0Provider>
);
