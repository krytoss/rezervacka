"use client"

import { useState } from "react"
import Menu from "./Menu"
import MenuSwitcher from "./MenuSwitcher"
import ProfileDropdown from "./ProfileDropdown"

import './Navbar.css'

const Navbar = () => {

	const [ openMenu, setOpenMenu ] = useState<boolean>(false)

	return (
		<header className='text-center fixed p-2 w-full z-50'>

			<div className="navbar bg-gradient flex-wrap text-white rounded-xl">

				<div className="flex-1">

					<MenuSwitcher openMenu={ openMenu } setOpenMenu={ setOpenMenu } />

					<a className="btn btn-ghost text-xl">
						<img src='./img/logo.png' className='w-12' /> rezervacka.online
					</a>

				</div>

				<Menu openMenu={ openMenu } />

				<ProfileDropdown />

			</div>

		</header>
	)

}

export default Navbar