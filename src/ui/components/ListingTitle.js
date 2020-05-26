import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { SecondaryHeading } from "../common/SecondaryHeading";
import Container from "./Container";

export default function ListingTitle() {
	const location = useLocation();
	const newLink = location.pathname.split("/")[
		location.pathname.split("/").length - 1
	];
	return (
		<ListingTitleContainer>
			<SecondaryHeading size="1.5rem">{newLink}</SecondaryHeading>
		</ListingTitleContainer>
	);
}

const ListingTitleContainer = styled.div`
	border-bottom: 1px ${(p) => p.theme.secondaryColor} solid;
	padding: 1rem 0;
	display: flex;
`;
