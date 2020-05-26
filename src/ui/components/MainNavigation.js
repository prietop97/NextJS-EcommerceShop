import React from "react";
import { useHistory } from "react-router-dom";
import TwitterSVG from "./SVG/TwitterSVG";
import InstagramSVG from "./SVG/InstagramSVG";
import FacebookSVG from "./SVG/FacebookSVG";
import CartSVG from "./SVG/CartSVG";
import HamburgerSVG from "./SVG/HamburgerSVG";
import styled from "styled-components";

export default function MainNavigation(props) {
	const history = useHistory();
	const sendToShoppingCart = () => {
		history.push("/cart");
	};

	return (
		<div
			className={`main-menu ${props.hidden ? "absolute-nav" : "regular-nav"}`}
		>
			<div className="left-menu">
				<HamburgerSVG color={props.color} />
				<MenuH3 hiddenn={props.hidden}>Menu</MenuH3>
			</div>
			<div className={`${props.hidden && "toggle-off"} sm-logo`}>Record</div>
			<div className="right-icons">
				<div className="social-media-icons">
					<FacebookSVG color={props.color} />
					<InstagramSVG color={props.color} />
					<TwitterSVG color={props.color} />
				</div>
				<div className="cart-icon">
					<MenuH3 hiddenn={props.hidden}>0</MenuH3>
					<CartSVG color={props.color} />
				</div>
			</div>
		</div>
	);
}

const MenuH3 = styled.h3`
	color: ${(props) => (props.hiddenn ? "#fff" : "black")};
	font-family: Montserrat;
	margin-left: 1rem;
	text-transform: uppercase;
	font-weight: 800;
	font-size: 0.9rem;

	&:hover {
		color: #1ebf90;
	}
`;
