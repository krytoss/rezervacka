import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../components/dashboard/Navbar";

const inter = Inter(
	{
		subsets: ["latin"]
	}
);

const Layout = ({ children }: Readonly<{children: React.ReactNode;}>) => {

	return (
		<>
			<Navbar />
			{ children }
		</>
	);
}

export default Layout