import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { History } from "./Component/History";
import { Header } from "./Component/Header";
import { Home } from "./Component/Home";

/**
* @author Owolabi Oluwatosin Daniel (OOD)
* @function App
**/
const Routing = (props) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  )
}

export const App = (props) => {
  return (
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
  )

}
