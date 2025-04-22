'use client';

import { useState } from 'react';

import { motion } from 'motion/react';
const FadeInOut = () => {
	const [show, setShow] = useState<boolean>(false);
	return (
		<div>
			<button
				className="px-4 py-2 bg-amber-300 rounded-2xl text-blue-500 cursor-pointer hover:scale-110"
				onClick={() => setShow(!show)}
			>
				点击
			</button>
			<motion.div
				className="w-100 h-100 bg-white mt-10 rounded-2xl"
				initial={{ x: 0 }}
				animate={
					show
						? { opacity: 1, x: 0, backgroundColor: 'red' }
						: { opacity: 0, x: '-100%' }
				}
				exit="hidden"
				variants={{
					hidden: {
						opacity: 0,
						x: '-100%'
					},
					visible: {
						opacity: 1,
						x: 0
					}
				}}
				transition={{
					duration: 1
				}}
			></motion.div>
		</div>
	);
};

export default FadeInOut;
