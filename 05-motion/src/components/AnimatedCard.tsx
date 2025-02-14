import { motion } from 'motion/react';
const AnimatedCard = () => {
	return (
		<motion.div
			className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden cursor-pointer"
			whileTap={{ scale: 0.8, rotate: 3 }}
			whileHover={{ scale: 1.1, rotate: 3 }}
			drag
			dragConstraints={{
				top: -100,
				left: -100,
				right: 100,
				bottom: 100
			}}
			// 弹性
			dragElastic={1}
			transition={{ type: 'spring', stiffness: 300 }}
		>
			<img
				className="w-full h-48 object-cover"
				src="https://images.unsplash.com/photo-1728408828574-70a460530093?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Card Image"
			/>
			<div className="p-6">
				<h2 className="text-xl font-semibold mb-2 text-black">
					Dynamic Card Title
				</h2>

				<p className="text-gray-700 mb-4">
					This is a simple card with Framer Motion animations and Tailwind CSS
					styling.
				</p>
				<button className="px-4 py-2 text-white bg-blue-500 shadow-xl rounded-2xl  hover:bg-blue-600 transition">
					Learn More
				</button>
			</div>
		</motion.div>
	);
};

export default AnimatedCard;
