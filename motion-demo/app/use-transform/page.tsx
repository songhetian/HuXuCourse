'use client';
import { motion, useMotionValue, useTransform } from 'motion/react';

const Home = () => {
	const x = useMotionValue(0);

	const backgroundColor = useTransform(x, [-100, 100], ['#ff000', '#00ff00']);
	return (
		<div>
			<motion.div
				drag
				dragConstraints={{
					left: -200,
					top: -200,
					right: 200,
					bottom: 200
				}}
				style={{ x, backgroundColor }}
				className="box"
			/>
		</div>
	);
};

export default Home;
