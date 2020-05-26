import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
export default function DisplayProduct({ product }) {
	const history = useHistory();
	const handleClick = () => {
		history.push(`/item/${product.title}`);
	};
	return (
		<ProductCard onClick={handleClick}>
			<img src={product.image} alt={product.title} />
			<h3 className="small-product-title">{product.title}</h3>
			<h3 className="small-product-price">${product.price}.00</h3>
		</ProductCard>
	);
}

const ProductCard = styled.div`
	width: 23%;
	text-align: center;
	cursor: pointer;
	margin: 2rem 0;
	&:hover {
		opacity: 0.8;
	}
`;
