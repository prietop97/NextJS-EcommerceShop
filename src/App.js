import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./ui/components/Footer";
import Homepage from "./ui/pages/Homepage";
import Container from "./ui/components/Container";
import Edit from "./ui/pages/Edit"
import { Pages } from "./ui/pages/defaultExport"
import axios from "axios"

function App() {
	const [pages, setPages] = useState(Pages)
	const [page, setPage] = useState("")
	useEffect(() => {

		setPages(Pages)
	},[])
	useEffect(async () => {
		const home_page = {
			path: "/",
			name: "Homepage",
			children: Pages.children,
			props: Pages.props
		}
		console.log(Pages)
		const res = await axios.post('http://localhost:5000/schema/', Pages)
		const res2 = await fetch("http://localhost:5000/schema")
		const data = await res2.json()
		setPage(data)

	}, [pages])
	console.log(page)
	return (
		<div>
			<Switch>
				{console.log(<Homepage key="Homepage" />)}
				<Route exact path="/" component={Homepage} />
				<Route path="/edit" component={Edit} />

			</Switch>
			<Container>
				<Footer />
			</Container>
		</div>
	);
}

export default App;
