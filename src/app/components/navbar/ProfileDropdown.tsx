import MenuItem from "./MenuItem"
import ThemeSwitcher from "./ThemeSwitcher"

const ProfileDropdown = () => {

	return (
		<div className="dropdown dropdown-end order-1 lg:order-2 text-gray-600 dark:text-white">

			<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
				<div className="w-10 rounded-full">
					<img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
				</div>
			</div>

			<div className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60'>
				
				<ThemeSwitcher />

				<ul tabIndex={0} className="text-right">
					
					<MenuItem link='#' text='Profile' />
					<MenuItem link='#' text='Settings' />
					<MenuItem link='#' text='Logout' />

				</ul>

			</div>

		</div>
	)

}

export default ProfileDropdown