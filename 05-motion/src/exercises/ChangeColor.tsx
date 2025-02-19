import { motion, useMotionValue, useTransform } from 'motion/react';
const ChangeColor = () => {
	const x = useMotionValue(0);
	const backgroundColor = useTransform(x, [-100, 100], ['#445566', '#998877']);
	return (
		<div>
			<motion.div
				className="w-60 h-60 bg-white"
				drag
				dragConstraints={{
					left: -100,
					right: 100
				}}
				dragElastic={1}
				style={{ x, backgroundColor }}
			></motion.div>
		</div>
	);
};

export default ChangeColor;
