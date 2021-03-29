import { ThemeProvider } from "@emotion/react";
import UserProvider from "modules/Authentication/providers/UserProvier";
import ConsultationsPage from "pages/cosultation.page";
import MedicamentsPage from "pages/medicaments.page";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home.page";
import theme from "./ui/theme";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Router>
          <Switch>
            <Route path="/medicaments" exact>
              <MedicamentsPage />
            </Route>
            <Route path="/consultation" exact>
              <ConsultationsPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
