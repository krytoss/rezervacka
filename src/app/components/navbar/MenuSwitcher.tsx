"use client"

import { useState } from "react"

type Props = {
	openMenu: boolean,
	setOpenMenu: (open: boolean) => void
}

const MenuSwitcher = ({ openMenu, setOpenMenu }: Props) => {

	const handleMenuOpen = () => {
		setOpenMenu(!openMenu)
	}

	return (
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
	)

}

export default MenuSwitcher