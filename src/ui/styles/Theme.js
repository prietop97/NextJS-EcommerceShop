import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	primaryColor: "#1ebf90",
	secondaryColor: "#bbbbbb",
	lighestColor: "#ffffff",
	darkestColor: "#000000",
	mainFont: "Montserrat",
	secondaryFont: "Karla",
};
export default function Theme(props) {
	return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
