import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const inter = Inter(
	{
		subsets: ["latin"]
	}
);

const RootLayout = ({ children }: Readonly<{children: React.ReactNode;}>) => {

	return (
		<html data-theme='light' lang="en">

			<head>
				<title>
					Title
				</title>
			</head>

			<body className='min-h-screen text-gray-700 dark:text-white'>

				<Navbar />

				{children}

			</body>

		</html>
	);
}

export default RootLayout