import MenuItem from "./MenuItem"

type Props = {
	openMenu: boolean
}

const Menu = ({ openMenu }: Props) => {

	return (
		<ul className={ `menu menu-horizontal px-1 lg:flex ${!openMenu && 'hidden'} w-screen lg:w-auto order-2 lg:order-1` }>
			<MenuItem link='#' text='Link 1' />
			<MenuItem link='#' text='Link 2' />
			<MenuItem link='#' text='Link 3' />
			<MenuItem link='#' text='Link 4' />
			<MenuItem link='#' text='Link 5' />
		</ul>
	)

}

export default Menu