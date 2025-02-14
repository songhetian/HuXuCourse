import { motion } from 'motion/react';

const BouncingLoader = () => {
	return (
		<div className="flex justify-center items-center gap-x-3">
			{[...Array(3)].map((_, index) => (
				<motion.div
					key={index}
					animate={{ y: [0, -15, 0] }}
					transition={{
						duration: 1,
						repeat: Infinity,
						delay: index * 0.2,
						ease: 'easeInOut'
					}}
					className="w-3 h-3 rounded-full bg-amber-500"
				/>
			))}
		</div>
	);
};

export default BouncingLoader;
