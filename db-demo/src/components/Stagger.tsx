import { motion } from 'motion/react';
const Stagger = () => {
	return (
		<div className="w-full h-40 bg-black flex justify-center items-center">
			<motion.div
				className="flex w-full items-center justify-center gap-10"
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: {
							staggerChildren: 0.5,
							staggerDirection: 2
						}
					}
				}}
			>
				{[...Array(5)].map((_, index) => (
					<motion.div
						key={index}
						className="w-20 h-20 bg-amber-300 rounded-2xl"
						transition={{ duration: 3 }}
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1, scale: [1, 1.5, 1] }
						}}
					></motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default Stagger;
