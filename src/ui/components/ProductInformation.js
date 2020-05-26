import React from "react";
import styled from "styled-components";
import featuredItem from "../../assets/images/featured_item.jpg";
import Button from "../components/Button";

export default function ProductInformation(props) {
	return (
		<ProductInformationContainer>
			<ImageContainer>
				<img src={props.listing.image} alt="featured item" />
			</ImageContainer>
			<InfoContainer>
				<h2 className="featured-text">
					<bold>They Want My Soul</bold>
				</h2>
				<h3 className="price">$50.00</h3>
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

				<h5 className="item-date">November 2018</h5>
				<p className="description">
					They Want My Soul is our eighth studio album. It was released on
					August 5, It is our first album to feature new member Alex Fischel,
					who plays keyboards and guitar.
				</p>
			</InfoContainer>
		</ProductInformationContainer>
	);
}

const ProductInformationContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ImageContainer = styled.div`
	width: 49%;
`;

const InfoContainer = styled.div`
	width: 49%;
`;
