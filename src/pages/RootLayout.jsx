import { Outlet } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Header from "../components/Header";

export default function RootLayout() {
	return (
		<>
			<Header />
			<main className="container mt-4">
				<Outlet /> {/* This will render the child routes */}
			</main>
			<footer className="bg-light text-center py-3 mt-4">
				<p>Inventory Management &copy; 2023</p>
			</footer>
		</>
	);
}
