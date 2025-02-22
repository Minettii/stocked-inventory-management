import { useParams, Link } from "react-router-dom";

export default function ProductDetails() {
	const { id } = useParams();
	// Fetch product details based on the ID (for now, using a hardcoded list)
	const product = {
		id: 1,
		name: "Product 1",
		price: 10,
		quantity: 5,
		description: "This is a sample product.",
	};

	return (
		<div>
			<h1>Product Details</h1>
			<p>
				<strong>Name:</strong> {product.name}
			</p>
			<p>
				<strong>Price:</strong> ${product.price}
			</p>
			<p>
				<strong>Quantity:</strong> {product.quantity}
			</p>
			<p>
				<strong>Description:</strong> {product.description}
			</p>
			<Link
				to={`/products/${product.id}/update`}
				className="btn btn-warning"
			>
				Update
			</Link>
			<Link to="/products" className="btn btn-danger ms-2">
				Delete
			</Link>
		</div>
	);
}
