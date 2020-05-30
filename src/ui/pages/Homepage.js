import React, { useState } from "react";
import Hero from "../components/Hero";
import SmallTitle from "../components/SmallTitle";
import FeaturedItem from "../components/FeaturedItem";
import ProductList from "../components/ProductList";
import Container from "../components/Container";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";

import { featured1, featured2 } from "../../dummyData";
import "../../assets/scss/main.scss";

export default function Homepage() {
	const [products, setProducts] = useState(featured1);
	const [products2, setProducts2] = useState(featured2);
	return (
		<div id="home_page">
			<Hero id="hero_component" />
			<SmallTitle id="small_title_component" text="Latest Release" />
			<Container>
				<FeaturedItem />
				<SmallTitle text="Releases" />
				<ProductList products={products} />
				<SmallTitle text="Merch" />
				<ProductList products={products2} />
			</Container>
			<Banner />
			<Container>
				<SmallTitle text="SUBSCRIBE TO OUR NEWSLETTER" />
				<Newsletter />
			</Container>
		</div>
	);
}
