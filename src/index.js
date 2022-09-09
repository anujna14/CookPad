import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchContextProvider from "./store/SearchContext/SearchContext";
import { Provider } from "react-redux";
import store from "./store/redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ToastContainer />
    <Provider store={store}>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </Provider>
  </Router>
);
