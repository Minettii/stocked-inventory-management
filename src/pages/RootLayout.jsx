import { Outlet } from "react-router-dom";

export default function RootLayout() {
	return (
		<>
			<header>
				<nav>a</nav>
			</header>
			<Outlet />
			<footer>A</footer>
		</>
	);
}
