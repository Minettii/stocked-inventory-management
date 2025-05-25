import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductEdit from "./pages/ProductEdit";
import ProductCreate from "./pages/ProductCreate";
import productLoader from "./loaders/productLoader";
import ProductBoundary from "./error-boundaries/ProductBoundary";
import Products from "./pages/Products";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "products",
				element: <Products />,
			},
			{
				path: "products/:productId",
				element: <ProductDetails />,
				loader: productLoader,
				errorElement: <ProductBoundary />,
			},
			{
				path: "product-edit/:productId",
				element: <ProductEdit />,
				loader: productLoader,
				errorElement: <ProductBoundary />,
			},
			{
							path: "products/new",
							element: <ProductCreate />,
						},
		],
	},
]);

export default router;
