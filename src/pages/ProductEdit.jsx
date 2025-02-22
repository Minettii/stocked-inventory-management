import { useParams } from "react-router-dom";

export default function ProductEdit() {
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
			<h1>Update Product</h1>
			<form>
				<div className="mb-3">
					<label className="form-label">Name</label>
					<input
						type="text"
						className="form-control"
						defaultValue={product.name}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Price</label>
					<input
						type="number"
						className="form-control"
						defaultValue={product.price}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Quantity</label>
					<input
						type="number"
						className="form-control"
						defaultValue={product.quantity}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Description</label>
					<textarea
						className="form-control"
						defaultValue={product.description}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Save Changes
				</button>
			</form>
		</div>
	);
}
