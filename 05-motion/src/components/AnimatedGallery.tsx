import { motion } from 'motion/react';
import { useState } from 'react';
const galleryImages = [
	'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1445964047600-cdbdb873673d?q=80&w=3784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];
const AnimatedGallery = () => {
	const [showImages, setShowImages] = useState(false);
	const handelClick = () => setShowImages(prev => !prev);
	const ParentVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
				staggerDirection: 1
			}
		}
	};

	const ChildVariants = {
		hidden: { opacity: 0, rotateY: 20 },
		visible: { opacity: 1, rotateY: 0 }
	};

	const boxVariants = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: 200 }
	};
	return (
		<div className="">
			<motion.div
				variants={boxVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				whileHover="hidden"
				transition={{ duration: 0.5 }}
			>
				<h1>Box with Variants!</h1>
			</motion.div>

			<button
				onClick={handelClick}
				className="mb-[2rem] p-4 rounded-lg bg-yellow-300  text-black font-bold cursor-pointer"
			>
				{showImages ? 'Hidden Images' : 'Show Images'}
			</button>
			<motion.div
				className="flex"
				variants={ParentVariants}
				animate={showImages ? 'visible' : 'hidden'}
				// drag
				// dragElastic={1}
				transition={{ duration: 0.5 }}
			>
				{galleryImages.map((image, index) => (
					<motion.img
						src={image}
						key={index}
						alt={`Gallery Image ${index + 1}`}
						className="ml-[2rem] w-[300px] rounded"
						variants={ChildVariants}
					/>
				))}
			</motion.div>
		</div>
	);
};

export default AnimatedGallery;
