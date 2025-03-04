import Button from './components/Button';
import Loader from './components/Loader';
import PageWide from './components/PageWide';
import Shared from './components/Shared';
import { motion, useScroll, useTransform } from 'motion/react';
import Stagger from './components/Stagger';

const App = () => {
	const { scrollYProgress } = useScroll();

	const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

	return (
		<div className="h-[300vh]">
			<motion.div
				className="h-2 bg-red-500 fixed inset-0"
				transition={{ duration: 1 }}
				style={{ width }}
			></motion.div>
			<h1 className="text-3xl">Button</h1>
			<Button />
			<h1 className="text-3xl">Loader</h1>
			<Loader />
			<h1 className="text-3xl">PageWide</h1>
			<PageWide />
			<h1 className="text-3xl">Shred</h1>
			<Shared />
			<h1 className="text-3xl">Stagger</h1>
			<Stagger />
		</div>
	);
};

export default App;
