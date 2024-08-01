import Circles from "./components/Circles";
import Navbar from "./components/navbar/Navbar";
import HomeSection from "./components/sections/HomeSection";
import PricingSection from "./components/sections/PricingSection";

const Home = () => {
  	return (
		<>
			<Navbar />
			<HomeSection />
			<PricingSection />
		</>
  	);
}

export default Home