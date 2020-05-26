import React, { useEffect, useState } from "react";
import DisplayProduct from "./DisplayProduct";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import { featured } from "../../dummyData";

export default function ProductList(props) {
	const [products, setProducts] = useState([]);
	const history = useHistory();
	const handleClick = () => {
		history.push(`/${props.text}`);
	};
	useEffect(() => {
		/// AXIOS FOR CATEGORIES FEATURED ITEMS
		if (Array.isArray(props.products_)) {
			console.log(props.products_);
			setProducts(props.products_);
		} else {
			console.log(featured[props.text]);
			setProducts(featured[props.text]);
		}
	}, [props.text, props.products_]);
	return (
		<div className="product-list-wrapper">
			<div className="product-list-container">
				{products &&
					products
						.filter((_, i) => i < 4)
						.map((product) => (
							<DisplayProduct key={product.id} product={product} />
						))}
			</div>
			<div className="list-button">
				{props.cta && (
					<Button handleSubmit={handleClick} text="VIEW ALL" size="SM" />
				)}
			</div>
		</div>
	);
}
