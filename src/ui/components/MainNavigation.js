import React from "react";
import TwitterSVG from "./TwitterSVG";
import InstagramSVG from "./InstagramSVG";
import FacebookSVG from "./FacebookSVG";

export default function MainNavigation(props) {
	return (
		<div className="main-menu">
			<div className="left-menu">
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
						fill="#fff"
						d="M1 4a2 2 0 0 0 2 2h18a2 2 0 1 0 0-4H3a2 2 0 0 0-2 2z"
					/>
					<path fill="#fff" d="M3 14h18a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4z" />
					<path fill="#fff" d="M3 22h18a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4z" />
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
				<h3>Menu</h3>
			</div>
			<div className={`${props.hidden && "toggle-off"} sm-logo`}>Record</div>
			<div className="right-icons">
				<div className="social-media-icons">
					<FacebookSVG />
					<InstagramSVG />
					<TwitterSVG />
				</div>
				<div className="cart-icon">
					<p>0</p>
					<svg
						className="navi-icon cart-svg"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 30 30"
					>
						<circle cx="12" cy="23" r="2" fill="#fff" />
						<circle cx="21" cy="23" r="2" fill="#fff" />
						<path
							fill="#fff"
							d="M26.29,11.79l-1.77,5.32A3.5,3.5,0,0,1,21.2,19.5H12a3.49,3.49,0,0,1-3.39-2.65L6.5,8.64A1.49,1.49,0,0,0,5.05,7.5H3a1,1,0,0,1,0-2H5A3.53,3.53,0,0,1,8.44,8.15h0a.46.46,0,0,0,.45.35h15a2.5,2.5,0,0,1,2.37,3.29Z"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}
