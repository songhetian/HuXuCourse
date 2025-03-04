import { motion } from 'motion/react';
import { useState } from 'react';
const Shared = () => {
	const [index, setIndex] = useState(0);
	const iconVariants = {
		hidden: {
			opacity: 0,
			transition: {
				duration: 2
			}
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 2
			}
		}
	};
	return (
		<div className="w-full h-120 bg-black flex items-center justify-center">
			<motion.div className="w-200 h-100 bg-gray-100 rounded-2xl flex flex-col shadow shadow-amber-50 overflow-hidden">
				<motion.div className="h-20 w-full flex ">
					<motion.div
						className={` flex-1 rounded-t-2xl flex justify-center items-center cursor-pointer`}
						onTap={() => setIndex(0)}
						animate={{ backgroundColor: index === 0 ? '#e5e7eb' : '#f3f4f6' }}
						transition={{ duration: 2 }}
					>
						🍕披萨
					</motion.div>
					<motion.div
						className={`flex-1 rounded-t-2xl flex justify-center items-center cursor-pointer`}
						onTap={() => setIndex(1)}
						animate={{ backgroundColor: index === 1 ? '#e5e7eb' : '#f3f4f6' }}
						transition={{ duration: 1 }}
					>
						🍔汉堡包
					</motion.div>
					<motion.div
						className={` flex-1 rounded-t-2xl flex justify-center items-center cursor-pointer`}
						onTap={() => setIndex(2)}
						animate={{ backgroundColor: index === 2 ? '#e5e7eb' : '#f3f4f6' }}
						transition={{ duration: 1 }}
					>
						🍟薯条
					</motion.div>
				</motion.div>
				<motion.div
					className="h-0.5 bg-green-400 w-1/3"
					animate={{ x: `${index * 100}%` }}
					transition={{ duration: 1 }}
				></motion.div>
				<motion.div className="flex justify-center items-center">
					<div className=" mt-10">
						{index === 0 && (
							<motion.span
								className="text-[150px]"
								transition={{ duration: 1 }}
								variants={iconVariants}
								initial="hidden"
								animate="visible"
							>
								🍕
							</motion.span>
						)}
						{index === 1 && (
							<motion.span
								className="text-[150px]"
								transition={{ duration: 1 }}
								variants={iconVariants}
								initial="hidden"
								animate="visible"
							>
								🍔
							</motion.span>
						)}
						{index === 2 && (
							<motion.span
								className="text-[150px]"
								transition={{ duration: 1 }}
								variants={iconVariants}
								initial="hidden"
								animate="visible"
							>
								🍟
							</motion.span>
						)}
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Shared;
