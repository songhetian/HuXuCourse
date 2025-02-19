import { useScroll, useTransform, motion } from 'motion/react';

const ScrollIndicator = () => {
	const { scrollYProgress } = useScroll();

	const lineWidth = useTransform(scrollYProgress, [0, 1], ['0', '100%']);

	return (
		<div>
			<motion.div
				className="fixed top-0 left-0 bg-red-500 h-[5px]"
				style={{ width: lineWidth, transition: 'all 0.5s linear ' }}
				transition={{ duration: 5 }}
			></motion.div>
			{[...Array(100)].map((_, index) => (
				<p className="mt-5" key={index}>
					{' '}
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
					commodi eius minima iste amet totam omnis. Necessitatibus itaque
					dolore ad quasi ipsa asperiores, quo minus consequuntur minima qui ex
					natus?
				</p>
			))}
		</div>
	);
};

export default ScrollIndicator;
