import styled from "styled-components";

export const SecondaryHeading = styled.h2`
	color: ${(p) => p.color};
	font-family: ${(p) => p.theme.mainFont};
	letter-spacing: ${(p) =>
		p.spacing === "xl" ? "2rem" : p.spacing === "m" ? "1.5rem" : "0.1rem"};

	font-size: ${(p) => (p.size ? p.size : "0.9rem")};
	font-weight: 700;
	&:hover {
		cursor: ${(p) => (p.hover ? "pointer" : "default")};
		color: ${(p) => (p.hover ? p.theme.primaryColor : p.color)};
	}
`;
