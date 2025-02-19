import { motion } from 'motion/react';
const Card = ({ card, idx }: { card: { url: string }; idx: number }) => {
	return (
		<div
			key={idx}
			className="group relative w-[10rem] h-[10rem]  bg-neutral-200"
		>
			<motion.div
				style={{
					backgroundImage: `url(${card.url})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}
				className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
				whileHover={{ scale: 1.1 }}
			></motion.div>
		</div>
	);
};

export default Card;
