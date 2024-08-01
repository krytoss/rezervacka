import Circles from "../Circles"
import Section from "../Section"

const PricingSection = () => {

	return (
		<Section id='pricing' className='bg-gradient min-h-0'>
			<div className="flex justify-center">
				<div className='relative z-20 bg-white bg-opacity-10 border-2 border-white border-opacity-20 rounded-xl backdrop-blur-md p-5 mr-10 w-1/5'>
					<h3>Niečo</h3>
					<p>
						niečo tu
					</p>
					<a href="#" className="block w-full rounded-full bg-green-600 px-5 py-2 mt-5 text-center">
						Vyskúšať
					</a>
				</div>
				<div className='relative z-20 bg-white bg-opacity-10 border-2 border-white border-opacity-20 rounded-xl backdrop-blur-md p-5 mr-10 w-1/5'>
					Niečo tu 2
				</div>
				<div className='relative z-20 bg-white bg-opacity-10 border-2 border-white border-opacity-20 rounded-xl backdrop-blur-md p-5 w-1/5'>
					Niečo tu 3
				</div>
			</div>
			<Circles />
		</Section>
	)

}

export default PricingSection