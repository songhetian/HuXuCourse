import { motion } from 'motion/react';
import { useState } from 'react';
const cardVariants = {
	front: { rotateY: 0, x: 100 },
	back: { rotateY: 180, x: 100 }
};
const FlippingCard = () => {
	const [isFlipped, setIsFlipped] = useState(false);
	return (
		<motion.div
			className="perspective-1000 relative "
			onClick={() => setIsFlipped(!isFlipped)}
		>
			<motion.div
				className="w-64 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-3d  absolute inset-0"
				variants={cardVariants}
				initial="front"
				animate={isFlipped ? 'back' : 'front'}
				transition={{ duration: 0.6 }}
			>
				<motion.div className="absolute inset-0 bg-white  flex justify-center items-center text-xl font-bold  text-blue-500 ">
					Front Side
				</motion.div>
			</motion.div>
			<motion.div
				className="w-64 h-40 bg-blue-500 rounded-lg shadow-lg overflow-hidden transform-3d absolute inset-0 backface-hidden"
				variants={cardVariants}
				initial="front"
				animate={isFlipped ? 'front' : 'back'}
				transition={{ duration: 0.6 }}
			>
				<motion.div className="absolute inset-0 bg-blue  flex justify-center items-center text-xl font-bold  text-white ">
					Back Side
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default FlippingCard;
