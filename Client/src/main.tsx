import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './app/store.ts';



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-background">
          {" "}
          {/* Apply background color here */}
          <App />
          {/* <ToastContainer /> */}
        </div>
      </BrowserRouter>
    </Provider>{" "}
  </React.StrictMode>
);
