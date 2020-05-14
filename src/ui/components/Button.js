import React from "react";
import styled from "styled-components";

export default function Button({ size, cta, text, ...props }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("BUTTON PRESSED");
		if (props.handleSubmit) {
			props.handleSubmit(e);
		}
	};
	return (
		<StyledButton onClick={handleSubmit} cta={cta} size={size}>
			{text}
		</StyledButton>
	);
}

const StyledButton = styled.button`
	padding: 0.8rem 2rem;
	width: ${(props) => (props.size === "XL" ? "300px" : "175px")};
	/* font-size: ${(props) => (props.size === "XL" ? "1rem" : "0.7rem")}; */
	border: 2px #1ebf90 solid;
	color: ${(props) => (props.cta ? "white" : "#1ebf90")};
	background: ${(props) => (props.cta ? "#1ebf90" : "white")};
	font-weight: 700;
	cursor: pointer;
	&:hover {
		background: ${(props) => (props.cta ? "black" : "white")};
		color: ${(props) => (props.cta ? "white" : "black")};
		border: 2px black solid;
	}
`;
