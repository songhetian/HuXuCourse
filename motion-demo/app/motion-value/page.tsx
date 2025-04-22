'use client';
import { motion, useMotionValueEvent, useSpring } from 'motion/react';

const Home = () => {
	// const scale = useMotionValue(1);
	const scale = useSpring(1);
	useMotionValueEvent(scale, 'change', () => {
		console.log(scale.get());
	});
	return (
		<div>
			<motion.div
				className="box"
				style={{ scale }}
				whileHover={{ scale: 1.5 }}
				transition={{
					duration: 0.5,
					type: 'spring',
					stiffness: 1000
				}}
			/>
			<input
				type="range"
				max={5}
				min={0.5}
				step={0.2}
				defaultValue={0}
				className="mt-100"
				onChange={e => {
					scale.set(parseFloat(e.target.value));
				}}
			/>
		</div>
	);
};

export default Home;
