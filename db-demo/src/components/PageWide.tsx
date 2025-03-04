import { motion } from 'motion/react';
import { useState } from 'react';
const PageWide = () => {
	const [index, setIndex] = useState(0);
	const handelChange = (index: number) => {
		setIndex(index);
	};
	return (
		<div className="w-full h-40 bg-black flex items-center justify-center">
			<div className="flex justify-center items-center gap-10 relative p-2">
				<motion.div
					className="w-24 h-24 ring-8 ring-white rounded-full absolute left-0"
					animate={{ x: 120 * index }}
					transition={{ duration: 1 }}
				></motion.div>
				<motion.div
					className="w-20 h-20 bg-amber-300 rounded-full "
					onTap={() => handelChange(0)}
				></motion.div>
				<motion.div
					className="w-20 h-20 bg-blue-600 rounded-full"
					onTap={() => handelChange(1)}
				></motion.div>
				<motion.div
					className="w-20 h-20 bg-pink-500 rounded-full"
					onTap={() => handelChange(2)}
				></motion.div>
			</div>
		</div>
	);
};

export default PageWide;
