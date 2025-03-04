import { motion } from 'motion/react';
import { useState } from 'react';

const Button = () => {
	const [show, setShow] = useState<boolean>(false);
	return (
		<section>
			<div className="w-full h-40 bg-black flex justify-center items-center">
				<motion.div
					className={`w-40 h-20 bg-fuchsia-900 rounded-full flex  items-center relative p-3`}
				>
					<motion.div
						// onClick={() => setShow(!show)}
						className="w-17 h-17 bg-fuchsia-500 rounded-full "
						initial={{ x: 0 }}
						animate={{ x: show ? '100%' : 0 }}
						onTap={() => setShow(!show)}
						transition={{ duration: 2 }}
					></motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Button;
