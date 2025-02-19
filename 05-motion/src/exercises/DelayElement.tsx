import { motion } from 'motion/react';
import { useState } from 'react';
const DelayElement = () => {
	const ParentVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerDirection: 1, staggerChildren: 0.1 }
		},
		exit: { opacity: 0 }
	};
	const ChildVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 }
	};

	const [show, setShow] = useState(true);

	return (
		<div>
			<button onClick={() => setShow(!show)}>{show ? '隐藏' : '显示'}</button>
			<motion.div
				className="flex justify-between items-center gap-x-10"
				variants={ParentVariants}
				animate={show ? 'visible' : 'hidden'}
			>
				{[...Array(5)].map((_, index) => (
					<motion.div className="w-40 h-40 bg-white" variants={ChildVariants}>
						{index}
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default DelayElement;
