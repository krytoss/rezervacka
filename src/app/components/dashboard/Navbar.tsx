import Clock from "./Clock"

const Navbar = () => {

	return (
		<div id='header' className='bg-gradient py-2 sticky flex w-full top-0 bg-cyan-600 bg-opacity-100 shadow-md z-50 text-white h-[60px]'>
			<div id='menu-burger' className='p-2 space-between inline-block flex col-span-3 w-40 text-xl'>
				Názov podniku
			</div>

			<div className='inline-block w-auto content-center px-4 text-right col-span-7 sm:col-span-8 md:col-span-5 flex-1'>
				<Clock />
			</div>
		</div>
	)

}

export default Navbar