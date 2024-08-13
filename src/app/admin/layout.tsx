import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";

const inter = Inter(
	{
		subsets: ["latin"]
	}
);

const Layout = ({ children }: Readonly<{children: React.ReactNode;}>) => {

	return (
		<>
			<Navbar />
			<div className='flex flex-grow relative auto-cols-fr px-0 w-full w-auto mx-auto'>
				<Sidebar />
				<div className='flex-grow text-black px-5 py-10 rounded-xl'>
					{ children }
				</div>
			</div>
		</>
	);
}

export default Layout