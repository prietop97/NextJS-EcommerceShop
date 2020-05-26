import styled from "styled-components";

export const Row = styled.section`
	width: ${(p) =>
		p.size === "half"
			? "45%"
			: p.size === "third"
			? "30%"
			: p.size === "quarter"
			? "22%"
			: "100%"};
`;
