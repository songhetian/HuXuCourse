import { motion } from 'motion/react';
const images = [
	'https://images.unsplash.com/photo-1516905041604-7935af78f572?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1516906571665-49af58989c4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
	'https://images.unsplash.com/photo-1515704089429-fd06e6668458?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
	'https://images.unsplash.com/photo-1525548002014-e18135d814d7?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];
const Carousel = () => {
	return (
		<div className="flex justify-center items-center">
			<motion.div className="flex gap-1" animate={{ x: '-150%' }}>
				{images.map((image, index) => (
					<img key={index} src={image} className=" min-w-full  object-cover" />
				))}
			</motion.div>
		</div>
	);
};

export default Carousel;
