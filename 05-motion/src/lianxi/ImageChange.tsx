import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const images = [
	'https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=3870&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=3870&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?q=80&w=3200&auto=format&fit=crop',
	'https://plus.unsplash.com/premium_photo-1738847400430-de5eabe7e6f3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const ImageChange = () => {
	const [index, setIndex] = useState(0);

	const handleDrag = (event: React.MouseEvent<HTMLImageElement>, info: any) => {
		console.log(info.offset.y);

		if (info.offset.y >= 100) {
			setIndex(prev => (prev + 1) % images.length);
		} else if (info.offset.y <= -100) {
			setIndex(prev => (prev - 1 + images.length) % images.length);
		}
	};
	return (
		<div>
			<AnimatePresence>
				<motion.img
					src={images[index]}
					alt=""
					drag="y"
					dragConstraints={{
						left: 0,
						right: 0,
						top: -100,
						bottom: 100
					}}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 10, type: 'spring', stiffness: 300 }}
					onDragEnd={handleDrag}
					className="w-80 h-80 object-cover shadow rounded-2xl"
				/>
			</AnimatePresence>
		</div>
	);
};

export default ImageChange;
