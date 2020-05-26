import React from "react";

export default function HamburgerSVG(props) {
	return (
		<svg
			className="navi-icon"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			id="Layer_1"
			x="0px"
			y="0px"
			viewBox="0 0 24 24"
		>
			<path
				fill={props.color}
				d="M1 4a2 2 0 0 0 2 2h18a2 2 0 1 0 0-4H3a2 2 0 0 0-2 2z"
			/>
			<path fill={props.color} d="M3 14h18a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4z" />
			<path fill={props.color} d="M3 22h18a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4z" />
			<linearGradient
				id="SVGID_1_"
				gradientUnits="userSpaceOnUse"
				x1="-0.2697735"
				y1="6.2785058"
				x2="24.2697678"
				y2="17.7214813"
			>
				<stop offset="0" stop-color="#FFF" stop-opacity="0.2" />
				<stop offset="1" stop-color="#FFF" stop-opacity="0" />
			</linearGradient>
			<path
				fill="url(#SVGID_1_)"
				d="M3 6h18a2 2 0 0 0 0-4H3a2 2 0 1 0 0 4zm18 4H3a2 2 0 1 0 0 4h18a2 2 0 0 0 0-4zm0 8H3a2 2 0 1 0 0 4h18a2 2 0 0 0 0-4z"
			/>
		</svg>
	);
}
