// import { motion } from 'motion/react';
// import PulsingButton from './components/PulsingButton';
// import BouncingLoader from './components/BouncingLoader';
import AnimatedCard from './components/AnimatedCard';
import AnimatedGallery from './components/AnimatedGallery';
import Box from './components/Box';
import DraggableBox from './components/DraggableBox';
import FlippingCard from './components/FlippingCard';
import ImageGallery from './components/ImageGallery';
import AnimateCardScroll from './Hooks/AnimateCardScroll';
import DraggableBox1 from './Hooks/DraggableBox';
import fadeComponents from './exercises/FadeComponents';
import FadeComponents from './exercises/FadeComponents';
import SideBar from './exercises/SideBar';
import ChangeBgColor from './exercises/ChangeBgColor';
import ChangeColor from './exercises/ChangeColor';
import DelayElement from './exercises/DelayElement';
import Accordion from './lianxi/Accordion';
import ImageChange from './lianxi/ImageChange';
import StaggeredImageGallery from './lianxi/StaggeredImageGallery';
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
			{/* <ImageGallery /> */}
			{/* <AnimatedGallery /> */}
			{/* <DraggableBox /> */}
			{/* <DraggableBox1 /> */}

			{/* <AnimateCardScroll /> */}
			{/* <Box /> */}
			{/* <FadeComponents /> */}
			{/* <SideBar /> */}
			{/* <ChangeBgColor /> */}
			{/* <ChangeColor /> */}
			{/* <DelayElement /> */}
			{/* <Accordion /> */}
			{/* <ImageChange /> */}
			<StaggeredImageGallery />
		</div>
	);
};

export default App;
