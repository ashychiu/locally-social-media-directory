import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InstagramLogin from "./pages/InstagramLogin/InstagramLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        {/* <Redirect from="/" to="/home" exact /> */}
        {/* <Route path="/home" component={Home} exact /> */}
        {/* <Route path="/auth" component={Auth} /> */}
        <Route path="/instagram" component={InstagramLogin} />
        {/* <Route path="/add" component={AddBusiness} /> */}
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
