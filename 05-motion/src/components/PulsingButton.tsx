import { motion } from 'motion/react';
const PulsingButton = () => {
	return (
		<div>
			<motion.button
				className="py-2 px-4 outline-none bg-blue-400 text-black rounded  shadow-white"
				animate={{
					scale: [1, 1.1, 1],
					backgroundColor: ['#f56', '#2ff', '#eea', '#ccc'],
					color: ['blue', 'red']
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'linear'
				}}
			>
				Click Me!
			</motion.button>
		</div>
	);
};

export default PulsingButton;
