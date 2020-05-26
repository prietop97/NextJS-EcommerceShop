import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import SmallTitle from "../components/SmallTitle";
import { useLocation } from "react-router-dom";
import { products } from "../../dummyData";
import ProductList from "../components/ProductList";
import ProductInformation from "../components/ProductInformation";

export default function Listings() {
	const [listing, setListing] = useState({});
	const location = useLocation();
	const newLink = location.pathname.split("/")[
		location.pathname.split("/").length - 1
	];
	useEffect(() => {
		console.log(listing);
		setListing(
			products.find(
				(product) => product.title.toUpperCase() === newLink.toUpperCase()
			)
		);
	}, [newLink]);
	console.log(listing);
	return (
		<Container>
			<ProductInformation listing={listing} />
			<SmallTitle text="YOU MAY ALSO LIKE" />
			<ProductList products_={listing ? listing.recommended : []} />
		</Container>
	);
}
