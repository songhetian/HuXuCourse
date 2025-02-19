import { useState } from 'react';
import { motion } from 'motion/react';
import { IoMdArrowBack } from 'react-icons/io';

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true);
	const sidebarVariants = {
		open: { x: 0, opacity: 1, scale: 1 },
		closed: { x: '-100%', opacity: 0, scale: 0.8 }
	};
	return (
		<div className="flex justify-center items-center h-screen w-full bg-gray-950 text-white text-xl">
			<div className="relative">
				<motion.div
					className="fixed top-0 left-0 h-full w-64 bg-gray-900/90 text-white shadow-lg"
					variants={sidebarVariants}
					initial="open"
					animate={isOpen ? 'open' : 'closed'}
					transition={{
						duration: 1,
						type: 'spring',
						stiffness: 300,
						damping: 30
					}}
				>
					<div className="p-4">
						<button className="absolute top-4 right-4 z-10 p-2 bg-gray-800 text-white rounded-3xl focus:outline-none">
							<IoMdArrowBack />
						</button>
						<h2 className="text-2xl "></h2>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Sidebar;
