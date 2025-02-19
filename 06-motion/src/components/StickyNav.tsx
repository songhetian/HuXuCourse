import { motion } from 'motion/react';
import { useState } from 'react';

const StickyNav = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const handleClickNext = () => {
		setCurrentIndex(prev => (prev >= 4 ? 4 : prev + 1));
	};
	const handleClickPrev = () => {
		setCurrentIndex(prev => prev - 1);
	};
	return (
		<div>
			<div className="flex justify-between items-center mt-10 space-x-20 relative">
				<motion.div
					className="w-10 h-1 bg-blue-500 absolute left-0 "
					style={{
						width: `${(currentIndex / 5) * 125}%`,
						transition: 'width 0.5s linear'
					}}
				></motion.div>

				{[...Array(5)].map((_, index) => (
					<div
						key={index}
						className={`w-10 h-10 rounded-full transition-all duration-1000 ${
							currentIndex >= index ? 'bg-blue-500' : 'bg-gray-400'
						}`}
					></div>
				))}
			</div>
			<motion.button
				className="px-4 py-2 bg-blue-300 rounded-2xl mt-10 cursor-pointer hover:bg-blue-500 transition duration-300"
				onTap={handleClickNext}
				disabled={currentIndex >= 4}
			>
				下一步
			</motion.button>
		</div>
	);
};

export default StickyNav;
