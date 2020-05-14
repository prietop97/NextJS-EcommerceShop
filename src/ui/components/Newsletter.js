import React, { useState } from "react";
import Button from "./Button";
import * as yup from "yup";

export default function Newsletter() {
	const [formData, setFormData] = useState({ email: "" });
	const [error, setError] = useState("");

	let schema = yup.object().shape({
		email: yup
			.string()
			.email("You Must Enter A Valid Email")
			.required("Email Is Required To Sign Up"),
	});

	const handleChange = (e) => {
		e.persist();
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		schema
			.validate(formData)
			.then((_) => {
				console.log(_);
				console.log("WORKING");
				setError("");
				setFormData({ email: "" });
			})
			.catch((err) => setError(err.errors[0]));
	};

	return (
		<div className="newsletter-container">
			<p className="newsletter-title">
				Receive all latest news and special offers.
			</p>
			<form onSubmit={handleSubmit} className="newsletter-form">
				<div>
					<input
						onChange={handleChange}
						className="newsletter-input"
						type="text"
						value={formData.email}
						placeholder="EMAIL@EXAMPLE.COM"
						name="email"
					/>
					<Button size="xs" text="SUBSCRIBE" handleSubmit={handleSubmit} />
				</div>
				<p className="error">{error}</p>
			</form>
		</div>
	);
}
