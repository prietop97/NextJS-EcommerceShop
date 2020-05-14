import React from "react";

export default function DisplayProduct({ product }) {
	return (
		<div className="small-product">
			<img src={product.image} alt={product.title} />
			<h3 className="small-product-title">{product.title}</h3>
			<h3 className="small-product-price">${product.price}.00</h3>
		</div>
	);
}
