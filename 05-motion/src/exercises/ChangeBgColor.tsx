import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ChangeEvent } from 'react';
const ChangeBgColor = () => {
	const rotate = useMotionValue(0);

	// const backgroundColor = useTransform(rotate, [0, 180], ['#ccc', '#dd5566']);

	const scale = useSpring(1);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		scale.set(parseFloat(e.target.value));
	};

	// const backgroundColor = useTransform(scale, [0, 1.5], ['#dd4433', '#ccd456']);

	const x = useMotionValue(100);

	const backgroundColor = useTransform(x, [10, 100], ['#dd4433', '#ccd456']);
	return (
		<div className="flex flex-col gap-y-20 justify-center items-stretch">
			<motion.div
				className="w-64 h-64 bg-white "
				animate={{ rotate: 360 }}
				transition={{ duration: 2, repeatType: 'reverse', repeat: Infinity }}
				drag
				dragElastic={1}
				dragConstraints={{
					left: -100,
					right: 100
				}}
				style={{ backgroundColor, rotate }}
			></motion.div>

			<motion.div
				className="mt-20 w-65 h-65"
				drag
				dragElastic={1}
				dragConstraints={{
					left: -100,
					right: 100
				}}
				style={{ scale, backgroundColor }}
			></motion.div>

			<input
				type="range"
				max={1.5}
				min={0.1}
				step={0.1}
				defaultValue={1}
				onChange={handleChange}
			/>

			<button className="px-4 py-2 bg-blue-500 rounded-xl cursor-pointer hover:bg-blue-700 transition duration-300">
				Click Me!
			</button>
		</div>
	);
};

export default ChangeBgColor;
