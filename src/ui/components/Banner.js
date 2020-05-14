import React from "react";
import Button from "./Button";

export default function Banner() {
	return (
		<div className="banner-container">
			<h2 className="banner-text">
				WE LOVE TO JAM, WE LIVE TO RECORD<span>.</span>
			</h2>
			<Button text="ABOUT US" size="XS" cta />
		</div>
	);
}
