import { useMotionValue, useTransform, motion } from 'motion/react';

const DraggableBox = () => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const backgroundColor = useTransform(x, [-100, 100], ['#ff0000', '#00ff00']);
	const skewX = useTransform(y, [-100, 100], [0, 50]);

	return (
		<div>
			<motion.div
				className="w-64 h-64 bg-blue-400 rounded-xl flex justify-center items-center cursor-pointer"
				drag
				dragConstraints={{
					left: -200,
					right: 200
				}}
				dragElastic={1}
				style={{ x, y, backgroundColor, skewX }}
			>
				<span className="text-white">Drag Me!</span>
			</motion.div>
			<motion.div className="w-32 h-32 border bg-amber-300"></motion.div>
		</div>
	);
};

export default DraggableBox;
