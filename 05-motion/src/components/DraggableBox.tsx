import { useMotionValue, useMotionValueEvent, useSpring } from 'framer-motion';
import { motion } from 'motion/react';
import { ChangeEvent } from 'react';

const DraggableBox = () => {
	const x = useMotionValue(0);
	useMotionValueEvent(x, 'animationStart', () => {
		console.log('start');
	});

	useMotionValueEvent(x, 'change', latest => {
		console.log(`坐标位置为${latest}`);
	});

	// const scale = useMotionValue(1);
	const scale = useSpring(1);

	const changeHandle = (e: ChangeEvent<HTMLInputElement>) => {
		scale.set(parseFloat(e.target.value));
	};

	return (
		<div className="flex flex-col justify-center items-center space-y-10">
			<motion.div
				className="box"
				drag
				dragConstraints={{ left: 0, right: 200 }}
				style={{ x, scale }}
				transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
			/>
			<input
				type="range"
				min={1}
				max={5}
				step={0.1}
				defaultValue={0}
				onChange={changeHandle}
			/>
		</div>
	);
};

export default DraggableBox;
