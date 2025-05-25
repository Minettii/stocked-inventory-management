import { useState } from "react";

export default function ProductCreate() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Product Name:", name);
		console.log("Product Price:", price);
		console.log("Product Quantity:", quantity);
	};

	return (
		<div className="container">
			<h1>Create New Product</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Name:</label>
					<input
						type="text"
						placeholder="Enter product name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div>
					<label>Price:</label>
					<input
						type="number"
						placeholder="Enter product price"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>

				<div>
					<label>Quantity:</label>
					<input
						type="number"
						placeholder="Enter product quantity"
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
					/>
				</div>

				<button type="submit">
					Create Product
				</button>
			</form>
		</div>
	);
}
