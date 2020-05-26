import React from "react";
import ListingTitle from "../components/ListingTitle";
import PaginatedListings from "../components/PaginatedListings";
import Container from "../components/Container";
export default function Listings() {
	return (
		<Container>
			<ListingTitle />
			<PaginatedListings />
		</Container>
	);
}
