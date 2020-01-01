import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import LoginPage from "./components/Login";
import HomePage from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Favorites from "./components/Favorites";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={LoginPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/favorites" component={Favorites} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

/* 

YouTUBE API KEY
AIzaSyCw1jTakxF14j9ppmQ5eblwNcrWiEnzASA

*/
