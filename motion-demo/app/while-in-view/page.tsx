import * as motion from 'motion/react-client';
const Home = () => {
	return (
		<div className="flex justify-center items-center mt-[200rem]">
			<div className="h-[200vh] w-full flex justify-center items-center">
				<motion.div
					className="bg-white rounded-lg p-6 shadow-lg text-center"
					initial={{ scale: 0.5, opacity: 0 }}
					whileInView={{ opacity: 1, y: -200, scale: 2 }}
					transition={{ duration: 1, type: 'spring', stiffness: 100 }}
				>
					<h2 className="text-2xl ">Afdafdsadfsafasdfdsa</h2>
				</motion.div>
			</div>
		</div>
	);
};

export default Home;
