import React from "react";
import DisplayProduct from "./DisplayProduct";
import Button from "./Button";

export default function ProductList({ products }) {
	return (
		<div className="product-list-wrapper">
			<div className="product-list-container">
				{products.map((product) => (
					<DisplayProduct key={product.id} product={product} />
				))}
			</div>
			<div className="list-button">
				<Button text="VIEW ALL" size="SM" />
			</div>
		</div>
	);
}
