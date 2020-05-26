import { css } from "styled-components";

export const flexRow = (justify) => {
	return css`
		display: flex;
		justify-content: ${justify};
		align-items: center;
	`;
};
