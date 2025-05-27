import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ProductsContextProvider } from "./contexts/ProductsContext";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ProductsContextProvider>
			<App />
		</ProductsContextProvider>
	</StrictMode>
);
