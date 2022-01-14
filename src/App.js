import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddBusiness from "./components/AddBusiness/AddBusiness";

import "./App.scss";

function App() {
	return (
		<BrowserRouter>
			<Header />

			<Switch>
				{/* <Redirect from="/" to="/home" exact />
				<Route path="/home" component={Home} exact />
			    <Route path="/auth" component={Auth} />
				<Route path="/instagram" component={Instagram} />  */}

				<Route path="/add" component={AddBusiness} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
