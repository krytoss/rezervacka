import { RiDashboardFill } from "rocketicons/ri"
import MenuLink from "./MenuLink"
import { BiCalendar, BiCog } from "rocketicons/bi"
import { BsClock } from "rocketicons/bs"
import { FaUmbrellaBeach } from "rocketicons/fa"
import { FaPeopleGroup } from "rocketicons/fa6"
import { MdCategory } from "rocketicons/md"

const Sidebar = () => {

	return (
		<div className='w-60 xl:w-80 h-screen px-5 pb-5 shadow-none bg-slate-800 py-5 text-white'>
			<span className='block text-xl mb-5'>Hlavné</span>
			<MenuLink link='/dashboard'>
				<RiDashboardFill className='mr-1' /> Nástenka
			</MenuLink>
			<MenuLink link='/dashboard'>
				<BiCalendar className='mr-1' /> Rezervácie
			</MenuLink>
			<span className='block text-xl mt-5 mb-5'><BiCog /> Nastavenia</span>
			<MenuLink link='/dashboard'>
				<BsClock className='mr-1' /> Pracovné časy
			</MenuLink>
			<MenuLink link='/dashboard'>
				<FaUmbrellaBeach className='mr-1' /> Dovolenky / voľno
			</MenuLink>
			<MenuLink link='/dashboard'>
				<MdCategory className='mr-1' /> Kategórie
			</MenuLink>
			<MenuLink link='/dashboard'>
				<FaPeopleGroup className='mr-1' /> Zamestnanci
			</MenuLink>
		</div>
	)

}

export default Sidebar