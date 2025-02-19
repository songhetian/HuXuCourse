import { motion } from 'motion/react';
const Loader = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<motion.div
				className="relative w-50 h-50 border-10 border-blue-500 border-solid rounded-full"
				animate={{ rotate: 360 }}
				transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
			>
				<motion.div
					className="absolute inset-0 border-10 border-blue-300 border-solid rounded-full m-1"
					animate={{ opacity: [1, 0.5, 1] }}
					transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
					style={{ borderTopColor: '#000' }}
				></motion.div>
			</motion.div>
		</div>
	);
};

export default Loader;
