import {
	Hero,
	CustomerReviews,
	Footer,
	PopularProducts,
	Services,
	SpecialOffer,
	Subscribe,
	SuperQuality
} from './sections/index';
import { motion } from 'motion/react';

import { Nav } from './components/index';
import { useInView } from 'react-intersection-observer';
const App = () => {
	const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
	return (
		<main className="relative ">
			<div className="w-100 h-100 bg-green-400/50 rounded-2xl m-100 hover:paused shadow-2xl running  animate-spin direction-reverse transition-all duration-500 "></div>

			<input
				type="text"
				className="text-blue-400 outline-offset-8 outline-lime-400"
			/>
			{/* <motion.div
				className="flex mt-50 gap-10 perspective-[1000px] transform-3d"
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: {
							staggerChildren: 0.5
						}
					}
				}}
				initial="hidden"
				animate="visible"
			>
				<motion.div
					className="w-20 h-20 bg-amber-300"
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1
						}
					}}
				></motion.div>
				<motion.div
					className="w-20 h-20 bg-amber-300"
					variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
				></motion.div>
				<motion.div
					className="w-20 h-20 bg-amber-300"
					variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
				></motion.div>
			</motion.div> */}

			<Nav />
			<section className="xl:padding-l wide:padding-r padding-b ">
				<Hero />
			</section>
			<section className="padding">
				<PopularProducts targetRef={ref} inView={inView} />
			</section>
			<section className="padding">
				<SuperQuality />
			</section>
			<section className="padding padding-x py-10 ">
				<Services />
			</section>
			<section className="padding">
				<SpecialOffer />
			</section>
			<section className="padding bg-pale-blue ">
				<CustomerReviews />
			</section>
			<section className="padding padding-x sm:py-32 py-16 w-full">
				<Subscribe />
			</section>
			<section className="padding bg-black padding-x pb-8">
				<Footer />
			</section>
		</main>
	);
};

export default App;
