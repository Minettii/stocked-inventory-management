import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductsContext from "../contexts/ProductsContext";

export default function Products() {
	const [products, setProducts] = useState([
		{ id: 1, name: "Product 1", price: 10, quantity: 5 },
		{ id: 2, name: "Product 2", price: 20, quantity: 10 },
	]);

	return (
		<div>
			<h1>Products</h1>
			<Link to="/products/new" className="btn btn-primary mb-3">
				New Product
			</Link>
			{products.length > 0 ? (
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr key={product.id}>
								<td>{product.name}</td>
								<td>${product.price}</td>
								<td>{product.quantity}</td>
								<td>
									<Link
										to={`/products/${product.id}`}
										className="btn btn-info btn-sm"
									>
										Details
									</Link>
									<Link
										to={`/products/${product.id}/update`}
										className="btn btn-warning btn-sm ms-2"
									>
										Update
									</Link>
									<button
										className="btn btn-danger btn-sm ms-2"
										onClick={() => deleteProduct(product.id)}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<div className="alert alert-info">
					No products have been registered yet.{" "}
					<Link to="/products/new">Click here</Link> to register a new
					product.
				</div>
			)}
		</div>
	);
}
