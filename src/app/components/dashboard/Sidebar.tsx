import { RiDashboardFill } from "rocketicons/ri"
import MenuLink from "./MenuLink"
import { BiCalendar, BiCog, BiLogOut, BiMenu, BiUser } from "rocketicons/bi"
import { BsClock } from "rocketicons/bs"
import { FaMoneyBill, FaSubscript, FaUmbrellaBeach } from "rocketicons/fa"
import { FaPeopleGroup } from "rocketicons/fa6"
import { MdCategory } from "rocketicons/md"

const Sidebar = () => {

	return (
		<div className='w-60 xl:w-80 h-[calc(100vh-60px)] px-5 pb-5 shadow-none bg-slate-800 py-5 text-white'>
			<span className='block text-xl mt-5 mb-5'><BiMenu /> Menu</span>
			<MenuLink link='/dashboard'>
				<RiDashboardFill className='mr-1' /> Nástenka
			</MenuLink>
			<MenuLink link='/dashboard'>
				<BiCalendar className='mr-1' /> Kalendár rezervácií
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
			<span className='block text-xl mt-5 mb-5'><BiUser /> Účet</span>
			<MenuLink link='/dashboard'>
				<FaMoneyBill className='mr-1' /> Predplatné
			</MenuLink>
			<MenuLink link='/dashboard'>
				<BiCog className='mr-1' /> Nastavenia účtu
			</MenuLink>
			<MenuLink link='/dashboard' className='mt-10'>
				<BiLogOut className='mr-1' /> Odhlásiť sa
			</MenuLink>
		</div>
	)

}

export default Sidebar