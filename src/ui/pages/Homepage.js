import React, { useState } from "react";
import Hero from "../components/Hero";
import SmallTitle from "../components/SmallTitle";
import FeaturedItem from "../components/FeaturedItem";
import ProductList from "../components/ProductList";
import Container from "../components/Container";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";

import { featured1, featured2, categories } from "../../dummyData";
import "../../assets/scss/main.scss";

export default function Homepage() {
	const [categorie, setCategorie] = useState(categories);
	return (
		<div>
			<Hero />
			<SmallTitle text="Latest Release" />
			<Container>
				<FeaturedItem />
				{categorie.map((category) => (
					<>
						<SmallTitle text={category} />
						<ProductList cta text={category} />
					</>
				))}
			</Container>
			<Banner />
			<Container>
				<SmallTitle text="SUBSCRIBE TO OUR NEWSLETTER" />
				<Newsletter />
			</Container>
		</div>
	);
}
