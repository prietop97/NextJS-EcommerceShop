import React from "react";
import featuredItem from "../../assets/images/featured_item.jpg";
import Button from "./Button";

export default function FeaturedItem() {
	return (
		<div className="featured-container">
			<div className="featured-photo">
				<img
					className="featured-item-img"
					src={featuredItem}
					alt="featured item"
				/>
			</div>
			<div className="side-text">
				<h2 className="featured-text">
					<bold>They Want My Soul</bold>
				</h2>
				<h3 className="price">$50.00</h3>
				<h5 className="item-date">November 2018</h5>
				<p className="description">
					They Want My Soul is our eighth studio album. It was released on
					August 5, It is our first album to feature new member Alex Fischel,
					who plays keyboards and guitar.
				</p>
				<form className="form-format">
					<label className="label-format" htmlFor="format">
						Format
					</label>
					<select name="format" id="format">
						<option value="vinyl special edition">Vinyl Special Edition</option>
						<option value="vinyl white edition">Vinyl White Edition</option>
						<option value="cd">CD</option>
					</select>
				</form>
				<div className="cta-btns">
					<Button size="XL" text="ADD TO CART" />
					<Button cta size="XL" text="BUY IT NOW" />
				</div>
			</div>
		</div>
	);
}
