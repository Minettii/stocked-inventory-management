import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";

export default function Home() {
	// Get the products from the Products component
	const [products] = useState([
		{ id: 1, name: "Product 1", price: 10, quantity: 5 },
		{ id: 2, name: "Product 2", price: 20, quantity: 10 },
	]);

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					{products.length > 0 ? (
						<>
							<h2>Most Recent Products</h2>
							<ul>
								{products.slice(0, 5).map((product) => (
									<li key={product.id}>{product.name}</li>
								))}
							</ul>
						</>
					) : (
						<>
							<p>No products registered yet.</p>
							<Link to="/product-create">
								<Button variant="primary">New Product</Button>
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
