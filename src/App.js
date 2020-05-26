import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Theme from "./ui/styles/Theme";
import Footer from "./ui/components/Footer";
import Homepage from "./ui/pages/Homepage";
import Listings from "./ui/pages/Listings";
import Listing from "./ui/pages/Listing";
import Container from "./ui/components/Container";
import MainNavigation from "./ui/components/MainNavigation";
import BreadCrumb from "./ui/components/BreadCrumb";

function App() {
	const [hidden, setHidden] = useState(false);
	const [color, setColor] = useState("black");
	const [path, setPath] = useState([{ text: "Home", path: "/" }]);

	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/") {
			setHidden(true);
			setColor("#fff");
		} else {
			setHidden(false);
			setColor("black");
		}
	}, [location]);

	return (
		<Theme>
			{!hidden ? (
				<Container>
					<MainNavigation hidden={hidden} color={color} />
					<BreadCrumb path={path} setPath={setPath} />
				</Container>
			) : (
				<MainNavigation hidden={hidden} color={color} />
			)}
			<Switch>
				<Route path="/item/:title">
					<Listing />
				</Route>
				<Route path="/:category">
					<Listings />
				</Route>
				<Route exact path="/">
					<Homepage />
				</Route>
			</Switch>
			<Container>
				<Footer />
			</Container>
		</Theme>
	);
}

export default App;
