'use client';
import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform
} from 'motion/react';
const Home = () => {
	const { scrollYProgress } = useScroll();

	useMotionValueEvent(scrollYProgress, 'change', () => {
		console.log(scrollYProgress.get());
	});
	const width = useTransform(scrollYProgress, [0, 1], ['0', '100%']);
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
	return (
		<div className="h-[200vh] flex justify-center items-center">
			<motion.div
				className="fixed inset-0 h-2 0 bg-blue-200 "
				style={{ width }}
				transition={{
					duration: 0.5,
					type: 'spring',
					stiffness: 100
				}}
			></motion.div>
			<motion.div
				className="w-100 h-100 bg-white rounded-2xl "
				style={{ scale }}
				transition={{ type: 'spring', stiffness: 1000 }}
			/>
			<div>123</div>
		</div>
	);
};

export default Home;
