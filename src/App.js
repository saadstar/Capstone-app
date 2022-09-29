import React from "react";
import "./App.css";
import {  Switch, Route } from "react-router-dom"
import Header from "./Header";
import Photos from "./pages/Photo"
import Cart from "./pages/Cart"


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
