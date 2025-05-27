import { createContext, useState } from "react";

const ProductsContext = createContext({
	products: [],
	addProduct: (product) => { },
	updateProduct: (id, product) => { },
	deleteProduct: (id) => { },
});

export function ProductsContextProvider({ children }) {
	const [products, setProducts] = useState([
		{ id: 1, name: "Product 1", price: 10, quantity: 5 },
		{ id: 2, name: "Product 2", price: 20, quantity: 10 },
	]);

	const addProduct = (product) => {
		setProducts((prevProducts) => [...prevProducts, product]);
	};

	const updateProduct = (id, updatedProduct) => {
		setProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.id === id ? { ...product, ...updatedProduct } : product
			)
		);
	};

	const deleteProduct = (id) => {
		setProducts((prevProducts) =>
			prevProducts.filter((product) => product.id !== id)
		);
	};

	return (
		<ProductsContext.Provider
			value={{
				products: products,
				addProduct: addProduct,
				updateProduct: updateProduct,
				deleteProduct: deleteProduct,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
}

export default ProductsContext;

import PropTypes from 'prop-types';

ProductsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
