import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
const FadeComponents = () => {
	const [show, setShow] = useState(true);
	return (
		<AnimatePresence>
			<motion.div className="flex justify-center items-center flex-col gap-3">
				{show && (
					<motion.div
						className="box"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
					></motion.div>
				)}

				<motion.button
					className="bg-blue-300 px-4 py-2 rounded-2xl text-white mt-10 cursor-pointer"
					whileHover={{ color: 'red' }}
					onClick={() => setShow(!show)}
				>
					Click Me!
				</motion.button>
			</motion.div>
		</AnimatePresence>
	);
};

export default FadeComponents;
