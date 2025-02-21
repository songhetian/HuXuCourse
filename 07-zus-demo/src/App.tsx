import userStore from './store/userStore';
import ChildComponent from './components/ChildComponent';
import { motion, useMotionValue, useScroll, useTransform } from 'motion/react';
import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const parentVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
			staggerDirection: 1
		}
	}
};

const App = () => {
	const { counter } = userStore();
	const [show, setShow] = useState(true);
	const [start, setStart] = useState(true);
	const targetRef = useRef<HTMLDivElement | null>(null);
	const [imagePath, setImagePath] = useState('');
	const { scrollYProgress } = useScroll({
		target: targetRef
	});
	const { scrollYProgress: windowScroller } = useScroll();

	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
	const x = useTransform(windowScroller, [0, 1], ['0%', '100%']);

	const rotate = useMotionValue(0);
	const backgroundColor = useTransform(
		rotate,
		[0, 45, 90],
		['#fff', '#ccaadd', '#000']
	);

	const BallVariants = {
		first: { y: 0 },
		jump: {
			y: 100,
			transition: { duration: 1, repeat: Infinity, repeatType: 'reverse' }
		}
	};

	const y = useMotionValue(0);

	const backgroundColor1 = useTransform(
		y,
		[0, 50, 100],
		['#fff', '#000', '#444']
	);

	const x1 = useMotionValue(0);

	const bgColor = useTransform(
		x1,
		[-100, 0, 50, 100, 200],
		['#721817', '#FA9F42', '#2B4162', '#0B6E4F', '#E0E0E2']
	);

	const { ref, inView } = useInView({
		threshold: 0.5,
		delay: 1000
	});

	return (
		<motion.div className=" w-full h-[200vh] bg-gradient-to-r from-purple-400 from-0% via-50% via-yellow-400  to-blue-400 to-90% flex flex-col justify-center items-center space-y-10">
			<motion.div
				className="w-60 h-60 bg-white shadow rounded-2xl"
				drag="x"
				dragConstraints={{
					left: -100,
					right: 200
				}}
				dragElastic={1}
				style={{ x: x1, backgroundColor: bgColor }}
			></motion.div>
			<motion.div
				className="w-64 h-64 bg-pink-500/40 rounded-2xl shadow mt-20 origin-bottom-right"
				initial={{ rotate: 0 }}
				style={{ backgroundColor, rotate }}
				whileInView={{ rotate: 90 }}
				transition={{
					duration: 5,
					repeat: Infinity,
					repeatType: 'reverse'
				}}
			></motion.div>
			<motion.div
				className="w-10 h-10 bg-blue-300 rounded-full mt-10"
				initial={{ y: 0 }}
				whileInView={{ y: 200 }}
				transition={{
					duration: 3,
					repeat: Infinity,
					repeatType: 'reverse'
				}}
				style={{ y, backgroundColor: backgroundColor1 }}
			></motion.div>
			<div className="filter-grayscale hover:filter-none">123</div>
			<motion.div
				className="h-1 bg-red-500 fixed inset-0 transition duration-300"
				style={{ width: x }}
			></motion.div>
			<h1 className="">{counter}</h1>
			<ChildComponent />
			<div
				className=" absolute top-20 left-0 w-100 h-100 bg-amber-yibai overflow-scroll"
				ref={targetRef}
			>
				<div className="h-200"></div>
			</div>
			<motion.button
				className="px-4 py-2 bg-blue-400 shadow rounded-2xl cursor-pointer text-white"
				whileHover={{ color: '#ff7788' }}
				onTap={() => setShow(!show)}
				style={{ scale }}
			>
				{show ? '隐藏' : '显示'}
			</motion.button>
			<motion.div
				className="flex flex-row gap-5"
				variants={parentVariants}
				initial="hidden"
				animate={show ? 'visible' : 'hidden'}
			>
				{[...Array(10)].map((_, index) => (
					<motion.div
						key={index}
						className="w-20 h-20 bg-gray-400 rounded-2xl"
						variants={{
							hidden: { width: 0 },
							visible: { width: 40 }
						}}
					></motion.div>
				))}
			</motion.div>
			<motion.div
				className="w-200 h-80  bg-white  shadow-xl rounded-3xl hover:scale-105  flex justify-center items-center"
				initial={{ scale: 1 }}
				animate={{ scale: 1 }}
				exit={{ scale: 1 }}
				transition={{
					type: 'spring',
					stiffness: 300,
					repeat: Infinity,
					duration: 1
				}}
			>
				<input
					type="text"
					placeholder="search"
					className="border-2 border-blue-300  rounded px-4 py-1 outline-none hover:ring-amber-300 hover:ring-2 hover:ring-offset-8 outline-offset-8 outline-lime-400"
				/>
			</motion.div>
			<motion.div
				className="w-64 h-64 bg-blue-400"
				animate={{ scale: [1, 1.1, 1], x: 100 }}
				transition={{ duration: 1, repeatType: 'reverse', repeat: Infinity }}
			></motion.div>
			<div className="flex flex-row gap-2 ">
				{[...Array(6)].map((_, index) => (
					<motion.div
						key={index}
						className="w-10 h-20 bg-gray-400 rounded-full"
						animate={{ y: [10, 0, -10] }}
						transition={{
							duration: 0.5,
							repeatType: 'reverse',
							repeat: Infinity,
							repeatDelay: index * 0.2
						}}
					></motion.div>
				))}
			</div>
			<button className="btn animate-bounce direction-reverse ">
				Click Me
			</button>
			<button className="btn  direction-alternate animate-spin fill-mode-forwards">
				Click Me
			</button>
			<button
				onClick={() => setStart(!start)}
				className={`btn  direction-reverse animate-spin fill-mode-forwards repeat-infinite ${
					start ? 'running ' : 'paused'
				}`}
			>
				Click Me
			</button>
			<button className="animate-in fade-in btn spin-in">Button A</button>
			<button className="animate-in fade-in btn spin-in">Button A</button>
			<button className="animate-in fade-in duration-1000 btn zoom-in-150">
				Button A
			</button>
			<button className="animate-ping btn">Button ping</button>
			<button className="animate-pulse btn">Button pulse</button>
			<button className="animate-spin  btn">Button pulse</button>
			<button className=" animate-in slide-in-from-top btn">
				Button pulse
			</button>
			<h1>{`观察者模式${inView}`}</h1>

			<div ref={ref} className="w-200 h-200">
				<h2>{`Header inside viewport ${inView}.`}</h2>
				{inView && (
					<img
						src="https://plus.unsplash.com/premium_photo-1740017729370-42534bd82632?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						className="w-100 h-100 animate-in duration-3000 zoom-in "
					/>
				)}
			</div>

			<div>
				<div className=" w-100 h-50  mt-10 not-active:bg-red-500 bg-gray-200">
					not-active
				</div>
				<div className="active w-100 h-50 bg-gray-200 mt-10">active</div>
				<div className="w-100 h-50 bg-gray-200 mt-10 not-active:bg-red-500">
					not-active
				</div>
			</div>
		</motion.div>
	);
};

export default App;
