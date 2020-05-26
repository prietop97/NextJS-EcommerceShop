import React from "react";

export default function CartSVG(props) {
	return (
		<svg
			className="navi-icon cart-svg"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 30 30"
		>
			<circle cx="12" cy="23" r="2" fill={props.color} />
			<circle cx="21" cy="23" r="2" fill={props.color} />
			<path
				fill={props.color}
				d="M26.29,11.79l-1.77,5.32A3.5,3.5,0,0,1,21.2,19.5H12a3.49,3.49,0,0,1-3.39-2.65L6.5,8.64A1.49,1.49,0,0,0,5.05,7.5H3a1,1,0,0,1,0-2H5A3.53,3.53,0,0,1,8.44,8.15h0a.46.46,0,0,0,.45.35h15a2.5,2.5,0,0,1,2.37,3.29Z"
			/>
		</svg>
	);
}
