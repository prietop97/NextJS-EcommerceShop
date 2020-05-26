import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { featured } from "../../dummyData";
import DisplayProduct from "./DisplayProduct";
import styled from "styled-components";

export default function PaginatedListings() {
	const [products, setProducts] = useState([]);
	const location = useLocation();
	const newLink = location.pathname.split("/")[
		location.pathname.split("/").length - 1
	];
	useEffect(() => {
		setProducts(featured[newLink.toUpperCase()]);
		console.log(newLink.toUpperCase());
	}, [featured]);
	return (
		<ProductContainer>
			{products.map((product) => (
				<DisplayProduct product={product} />
			))}
		</ProductContainer>
	);
}

const ProductContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: space-between;
	align-content: center;
	margin-bottom: 4rem;
`;
