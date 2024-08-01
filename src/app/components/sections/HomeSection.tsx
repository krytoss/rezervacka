import Circle from "../Circle"
import Section from "../Section"
import Circles from "../Circles"

const HomeSection = () => {

	return (
		<Section id='home'>
			<div className='backdrop-blur-md rounded-lg p-5 bg-white bg-opacity-20'>
				<div className='grid grid-cols-2 justify-items-center relative z-20'>
					<div className='px-10'>
						<h1 className='text-[60px]'>
							rezervačný systém pre vaše podnikanie
						</h1>
					</div>
					<div>
						<img className='w-1/2 m-auto' src="./img/kalendar.jpg" alt="" />
					</div>
				</div>
				<div className='text-center relative z-20'>
					<a
						href='#'
						className='btn py-3 px-20 text-sm uppercase rounded-full bg-gradient font-semibold shadow-md text-white'
					>
						Začať zadarmo
					</a>
				</div>
			</div>
		</Section>
	)

}

export default HomeSection