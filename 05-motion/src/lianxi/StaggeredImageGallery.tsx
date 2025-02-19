import { image, img } from 'framer-motion/client';
import { motion } from 'motion/react';
const images = [
	'https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=3870&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=3870&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?q=80&w=3200&auto=format&fit=crop',
	'https://plus.unsplash.com/premium_photo-1738847400430-de5eabe7e6f3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const StaggeredImageGallery = () => {
	const staggerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, y: [0, -100, 0] }
	};
	return (
		<div>
			<motion.div
				className="flex justify-center items-center gap-x-10"
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: {
							staggerChildren: 0.5
						}
					}
				}}
			>
				{images.map((image, index) => (
					<motion.img
						key={index}
						src={image}
						className="w-50 h-50 object-cover"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						variants={staggerVariants}
					/>
				))}
			</motion.div>
		</div>
	);
};

export default StaggeredImageGallery;
