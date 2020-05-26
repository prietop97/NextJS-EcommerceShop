import React from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";

import { Row } from "../common/Row";
import { Column } from "../common/Column";
import { Container } from "../common/Container";

import HamburgerMenuButton from "./Navigation/HamburgerMenuButton";
import CartButton from "./Navigation/CartButton";
import SocialMediaSVGs from "./SVG/SocialMediaSVGs";

// import TwitterSVG from "./SVG/TwitterSVG";
// import InstagramSVG from "./SVG/InstagramSVG";
// import FacebookSVG from "./SVG/FacebookSVG";

export default function MainNavigation(props) {
	const history = useHistory();
	const sendToShoppingCart = () => {
		history.push("/cart");
	};

	return (
		<ParentNavContainer hiddenn={props.hidden}>
			<Container
				id="biggest"
				size="100%"
				center
				flex={{ justify: "space-between" }}
			>
				<Container size="33%" flex={{ justify: "flex-start" }}>
					<HamburgerMenuContainer>
						<HamburgerMenuButton color={props.color} />
					</HamburgerMenuContainer>
				</Container>
				<Container
					className={`${props.hidden ? "toggle-off" : ""}`}
					size="33%"
					flex={{ justify: "center" }}
				>
					<div className="sm-logo">Record</div>
				</Container>
				<Container size="33%" flex={{ justify: "flex-end" }}>
					<SocialMediaSVGs color={props.color} />
					<CartContainer onClick={sendToShoppingCart}>
						<CartButton color={props.color} />
					</CartContainer>
				</Container>
			</Container>
		</ParentNavContainer>
	);
}

const HamburgerMenuContainer = styled.div`
	width: inherit;
	display: flex;
	align-items: center;
	&:hover h2 {
		color: ${(p) => p.theme.primaryColor};
	}
	&:hover section svg path {
		fill: ${(p) => p.theme.primaryColor};
	}
`;

const CartContainer = styled.div`
	/* width: inherit; */
	display: flex;
	align-items: center;
	&:hover h2 {
		color: ${(p) => p.theme.primaryColor};
	}
	&:hover section svg path {
		fill: ${(p) => p.theme.primaryColor};
	}
`;

const ParentNavContainer = styled.nav`
	#biggest {
		${(p) =>
			p.hiddenn
				? css`
						position: absolute;
						top: 2rem;
						right: 0;
						left: 0;
				  `
				: css`
						margin: 1rem 0;
				  `}
	}

	svg {
		margin: 0 1rem;
	}
`;
