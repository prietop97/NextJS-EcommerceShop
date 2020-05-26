import styled from "styled-components";
import { flexRow } from "./Mixins";

const makeContainer = ({ flex }) => {
	if (!flex) {
		return;
	}
	return flexRow(flex.justify);
};
export const Container = styled.section`
	width: ${(p) => (p.page ? "85%" : p.size ? p.size : "100%")};
	margin: ${(p) => (p.center ? "0 auto" : "0")};
	${makeContainer}
`;
