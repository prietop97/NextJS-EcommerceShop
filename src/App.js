import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./ui/components/Footer";
import Homepage from "./ui/pages/Homepage";
import Container from "./ui/components/Container";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Homepage} />
			</Switch>
			<Container>
				<Footer />
			</Container>
		</div>
	);
}

export default App;
