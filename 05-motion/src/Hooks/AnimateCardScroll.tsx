import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform
} from 'motion/react';
const AnimateCardScroll = () => {
	const { scrollY } = useScroll();

	const scale = useTransform(scrollY, [0, 300], [1, 1.5]);
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);

	useMotionValueEvent(scrollY, 'change', latest => {
		console.log(latest);
	});
	return (
		<div className="h-screen">
			<div className="flex justify-center items-start mt-120">
				<motion.div
					className="w-64 h-64 bg-blue-300"
					initial={{ opacity: 1, scale: 1 }}
					style={{ scale, opacity }}
				></motion.div>
				<div className="h-[200vh] w-full flex justify-center items-center">
					<motion.div
						className="bg-white rounded-lg p-6 shadow-lg"
						initial={{ scale: 0.5, opacity: 0 }}
						whileInView={{
							opacity: 1,
							scale: 1.5
						}}
						transition={{ type: 'spring', stiffness: 300, duration: 1 }}
					>
						<h2 className="text-2xl font-bold mb-2 text-black ">
							Amazing Card
						</h2>
						<p className="text-gray-600">这个动画很漂亮</p>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default AnimateCardScroll;
