import { useScroll, motion, useTransform } from 'motion/react';
import { useRef } from 'react';
import Card from './Card';
import { cards } from '../utils/data';

const ScrollCarousel = () => {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef
	});

	const x = useTransform(scrollYProgress, [0, 1], ['1%', '-99%']);
	return (
		<div className="relative h-[300vh] bg-neutral-900 " ref={targetRef}>
			<div className="sticky top-0 flex h-screen items-center overflow-hidden">
				<motion.div className="flex gap-4" style={{ x }}>
					{cards.map((card, index) => (
						<Card idx={index} card={card} />
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default ScrollCarousel;
