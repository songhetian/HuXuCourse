import { motion } from 'motion/react';
import { useState } from 'react';
const SideBar = () => {
	const [show, setShow] = useState(true);
	const SideVariants = {
		hidden: { x: -200, opacity: 0 },
		visible: { x: 0, opacity: 1 }
	};
	return (
		<div>
			<motion.div
				className="w-64 h-64 bg-white "
				variants={SideVariants}
				animate={show ? 'hidden' : 'visible'}
			></motion.div>
			<button
				onClick={() => setShow(!show)}
				className="py-2 px-4 rounded-3xl bg-amber-300 mt-10 cursor-pointer"
			>
				Click Me
			</button>
		</div>
	);
};

export default SideBar;
