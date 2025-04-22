import * as motion from 'motion/react-client';
const Home = async ({ params }: { params: { cid: string } }) => {
	const { cid } = await params;
	if (cid === '1') {
		return (
			<div className="w-full h-screen flex justify-center items-center">
				<motion.div
					className="w-50 h-50 bg-white rounded-2xl"
					animate={{ y: [0, 200] }}
					transition={{
						duration: 0.5,
						repeat: Infinity,
						repeatType: 'reverse'
					}}
				></motion.div>
			</div>
		);
	}

	if (cid === '2') {
		return (
			<div className="w-full h-screen flex justify-center items-center">
				<motion.div
					className="w-50 h-50 bg-white rounded-2xl"
					animate={{ rotate: 360 }}
					transition={{
						duration: 2,
						repeat: Infinity,
						repeatType: 'loop'
					}}
				></motion.div>
			</div>
		);
	}

	if (cid === '3') {
		return (
			<div className="w-full h-screen flex justify-center items-center">
				<motion.div
					className="w-50 h-50 bg-white"
					initial={{ skewX: -40 }}
					transition={{
						duration: 1
					}}
					whileTap={{ skewX: 0 }}
				></motion.div>
			</div>
		);
	}

	if (cid === '4') {
		return (
			<div className="w-full h-screen flex justify-center items-center">
				<motion.div
					className="w-50 h-50 bg-white rounded-2xl"
					animate={{ scale: [1, 2, 1], rotate: [0, 45, 0] }}
					transition={{
						duration: 1,
						repeat: Infinity,
						repeatType: 'loop'
					}}
				></motion.div>
			</div>
		);
	}

	if (cid === '5') {
		return (
			<div className="w-full h-screen flex justify-center items-center flex-col gap-10">
				{[...Array(5)].map((_, i) => (
					<motion.div
						key={i}
						className="w-50 h-50 bg-white rounded-2xl"
						animate={{
							x: 100
						}}
						transition={{
							duration: 1,
							repeat: Infinity,
							repeatType: 'reverse',
							repeatDelay: i * 0.2
						}}
					></motion.div>
				))}
			</div>
		);
	}
	return <div>{cid}</div>;
};

export default Home;
