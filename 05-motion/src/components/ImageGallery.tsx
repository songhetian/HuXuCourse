import { div } from 'framer-motion/client';
import { motion } from 'motion/react';
const images = [
	{
		src: 'https://images.unsplash.com/photo-1446034295857-c39f8844fad4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		caption: 'Caption for Image 1'
	},
	{
		src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		caption: 'Caption for Image 2'
	},
	{
		src: 'https://images.unsplash.com/photo-1559666126-84f389727b9a?q=80&w=3877&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		caption: 'Caption for Image 3'
	}
];
const buttonVariants = {
	s1: { x: 100, y: 100 }
};
const ImageGallery = () => {
	return (
		// <div className="perspective-[1000px] ">
		// 	<div className="transform-3d">
		// 		<div className="w-64 h-64 bg-blue-600/50  rotate-x-100"></div>
		// 	</div>
		// </div>

		// <motion.div className=" relative">
		// 	<motion.button
		// 		className="px-4 py-2 bg-blue-300 rounded-2xl shadow-white"
		// 		variants={buttonVariants}
		// 		// initial="s1"
		// 		whileTap={{ scale: 1.5 }}
		// 		// whileHover={'s1'}
		// 		animate={{ scale: [1, 2, 1] }}
		// 		transition={{
		// 			duration: 1,
		// 			repeat: Infinity,
		// 			ease: 'easeInOut',
		// 			delay: 5
		// 		}}
		// 	>
		// 		Click Me!
		// 	</motion.button>
		// </motion.div>
		<motion.div></motion.div>
	);
};

export default ImageGallery;
