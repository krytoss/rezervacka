import { ReactNode } from "react"

type Props = {
	link: string,
	children: ReactNode
}

const MenuLink = ({ link, children }: Props) => {
	return (
		<a
			className={ 
				`menu-link flex items-center w-full
				text-darkgray hover:text-darkgray
				bg-white hover:bg-gradient-to-l from-gray-300/5 to-white/35 bg-opacity-5
				py-2 px-2 mb-1 rounded-sm
				shadow-lg`
		 	}
		 	href={ link }
		>
			{ children }
		</a>
	)
}

export default MenuLink