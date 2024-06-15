"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import Menu from "./components/Menu";
import ProfileDropdown from "./components/ProfileDropdown";

const inter = Inter(
	{
		subsets: ["latin"]
	}
);

const RootLayout = ({ children }: Readonly<{children: React.ReactNode;}>) => {

	const [ openMenu, setOpenMenu ] = useState<boolean>(false)

	const handleMenuOpen = () => {
		setOpenMenu(!openMenu)
	}

	return (
		<html data-theme='light' lang="en">

			<head>
				<title>
					Title
				</title>
			</head>

			<body className='min-h-screen text-gray-700 dark:text-white'>

				<header className='text-center'>

					<div className="navbar flex-wrap bg-base-300 dark:bg-base-400">

						<div className="flex-1">

							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost lg:hidden"
								onClick={ handleMenuOpen }
							>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									id="menu-button"
									className="h-6 w-6 cursor-pointer lg:hidden block"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									{
										openMenu ?
											<>
												<path strokeWidth='2' d="M6,6 L18,18" />
												<path strokeWidth='2' d="M6,18 L18,6" />
											</> :
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M4 6h16M4 12h16M4 18h16"
											/>
									}
								</svg>

							</div>

							<a className="btn btn-ghost text-xl">daisyUI</a>

						</div>

						<Menu openMenu={ openMenu } />

						<ProfileDropdown />

					</div>

				</header>

				{children}

			</body>

		</html>
	);
}

export default RootLayout