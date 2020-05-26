import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { SecondaryHeading } from "../common/SecondaryHeading";
import { ThemeContext } from "styled-components";

export default function BreadCrumb(props) {
	const theme = useContext(ThemeContext);
	const location = useLocation();
	const newLink = location.pathname.split("/")[
		location.pathname.split("/").length - 1
	];
	return (
		<BreadCrumbContainer>
			{props.path.map((links, i) => {
				return (
					<Link to={links.path}>
						<SecondaryHeading color={theme.darkestColor} hover>
							{links.text} / &nbsp;
						</SecondaryHeading>
					</Link>
				);
			})}
			<h2> {newLink}</h2>
		</BreadCrumbContainer>
	);
}

const BreadCrumbContainer = styled.div`
	border-top: 2px ${(p) => p.theme.darkestColor} solid;
	padding: 2rem 0;
	display: flex;
`;
