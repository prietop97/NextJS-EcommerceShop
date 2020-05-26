import styled, { css } from "styled-components";

// const makeColumn = () => {
// 	my_css = "";
// };
export const Column = styled.section`
	display: flex;
	justify-content: ${(p) => p.justify};
	flex-direction: row;
	align-items: center;
`;
