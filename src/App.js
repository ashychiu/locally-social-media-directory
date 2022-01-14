import { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import InstagramLogin from "./Pages/InstagramLogin/InstagramLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddBusiness from "./Pages/AddBusiness/AddBusiness";
import StoreFront from "./Pages/StoreFront/StoreFront";
import Store from "./Pages/Store/Store";
import HomePage from "./Pages/HomePage/HomePage";
import SearchResult from "./Pages/SearchResult/SearchResult";

import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Redirect from="/" to="/home" exact />
				<Route path="/home" component={HomePage} exact />
				<Route path="/auth" component={StoreFront} />
				<Route path="/instagram" component={InstagramLogin} />
				<Route path="/add" component={AddBusiness} />
				<Route path="/store" component={Store} />
				<Route path="/result" component={SearchResult} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
