import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Background from "./components/theme/Background";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from './utils/redux/store'
import { ThemeProvider } from "./components/theme/ThemeContext";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <Background>
        <Router>
          <App />
        </Router>
      </Background>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
