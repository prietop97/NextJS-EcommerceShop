import React from "react";

import HamburgerSVG from "../SVG/HamburgerSVG";
import { SecondaryHeading } from "../../common/SecondaryHeading";

export default function HamburgerMenu(props) {
	return (
		<>
			<HamburgerSVG color={props.color} />
			<SecondaryHeading color={props.color} hover={true}>
				Menu
			</SecondaryHeading>
		</>
	);
}

// const MenuH3 = styled.h3`
// 	color: ${(props) => (props.hiddenn ? "#fff" : "black")};
// 	font-family: Montserrat;
// 	margin-left: 1rem;
// 	text-transform: uppercase;
// 	font-weight: 800;
// 	font-size: 0.9rem;

// 	&:hover {
// 		color: #1ebf90;
// 	}
// `;
