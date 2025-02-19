import { useState, MouseEvent } from 'react';
import {
	AnimatePresence,
	motion,
	useMotionValue,
	useSpring
} from 'motion/react';
import { tr } from 'framer-motion/client';

const Accordion = () => {
	const [current, setCurrent] = useState(0);
	const x = useMotionValue(10);
	const scale = useSpring(1);
	const [isLarge, setIsLarge] = useState(false);

	const handelClick = () => {
		const s = scale.get();
		scale.set(s + 1 > 4 ? 1 : s + 1);
	};

	const handelDrag = (event: MouseEvent<HTMLDivElement>, info: any) => {
		console.log(info.offset.x);
	};
	const handleStart = () => setIsLarge(true);
	// const handleEnd = () => setIsLarge(false);
	const handelClick1 = () => setIsLarge(false);

	return (
		<div>
			<div>
				<p onClick={() => setCurrent(prev => (prev === 1 ? 0 : 1))}>第1条</p>
				{current === 1 && (
					<motion.div
						initial={{ width: 0 }}
						animate={{ width: '100%' }}
						transition={{ duration: 2 }}
					>
						1111111111111111
					</motion.div>
				)}
			</div>
			<div>
				<p onClick={() => setCurrent(1)}>第2条</p>
				{current === 2 && <section>1111111111111111</section>}
			</div>
			<div>
				<p onClick={() => setCurrent(3)}>第3条</p>
				{current === 3 && <section>1111111111111111</section>}
			</div>

			<motion.div onTap={handelClick} className="box" style={{ x, scale }}>
				{' '}
			</motion.div>

			<motion.div className="box" onDrag={handelDrag} drag></motion.div>
			<motion.div
				onTapStart={handleStart}
				onTap={handelClick1}
				className={` w-32 h-32 bg-blue-300 ${isLarge ? 'w-50 h-50' : ''} `}
			></motion.div>
		</div>
	);
};

export default Accordion;
