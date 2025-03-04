import { motion } from 'motion/react';
const Loader = () => {
	return (
		<div className="w-full h-40 bg-black flex justify-center items-center">
			<motion.div
				className="border-8 w-20 h-20 border-gray-200/80 border-t-transparent rounded-full"
				animate={{ rotate: 360 }}
				transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
			></motion.div>
		</div>
	);
};

export default Loader;
