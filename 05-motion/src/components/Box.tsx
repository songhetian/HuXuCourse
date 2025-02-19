import { transform } from 'motion';
import { motion, useMotionValue, useTransform } from 'motion/react';
const Box = () => {
	// const y = useMotionValue(0);

	// const translateY = useTransform(y, [0, 100], [100, 0]);

	return (
		<div>
			<motion.div
				className="box"
				animate={{
					translateY: [0, 200, 0],
					backgroundColor: ['#f0f0f0', '#ace', '#ccc']
				}}
				transition={{ duration: 10, repeat: Infinity }}
				// style={{ translateY }}
			></motion.div>
		</div>
	);
};

export default Box;
