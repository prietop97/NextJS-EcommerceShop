import React from "react";

import { Container } from "../../common/Container";
import FacebookSVG from "./FacebookSVG";
import InstagramSVG from "./InstagramSVG";
import TwitterSVG from "./TwitterSVG";

export default function SocialMediaSVGs(props) {
	return (
		<Container flex={{ justify: "flex-end" }}>
			<a href="#" target="_blank">
				<FacebookSVG color={props.color} />
			</a>
			<a href="#" target="_blank">
				<InstagramSVG color={props.color} />
			</a>
			<a href="#" target="_blank">
				<TwitterSVG color={props.color} />
			</a>
		</Container>
	);
}
