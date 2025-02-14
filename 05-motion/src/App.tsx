// import { motion } from 'motion/react';
// import PulsingButton from './components/PulsingButton';
// import BouncingLoader from './components/BouncingLoader';
import AnimatedCard from './components/AnimatedCard';
import FlippingCard from './components/FlippingCard';
import ImageGallery from './components/ImageGallery';
const App = () => {
	return (
		<div>
			{/* <motion.div
				className="box"
				initial={{ x: -200 }}	
				animate={{ x: 100 }}
				transition={{ duration: 2, delay: 1, ease: 'easeInOut', times: 3 }}
			/> */}
			{/* <PulsingButton /> */}
			{/* <BouncingLoader /> */}
			{/* Variants */}
			{/* <FlippingCard /> */}
			{/* <AnimatedCard /> */}
			<ImageGallery />
		</div>
	);
};

export default App;
