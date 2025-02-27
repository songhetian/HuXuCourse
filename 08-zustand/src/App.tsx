import { ChangeEvent, useEffect, useState } from 'react';
import { SexEnum, userStore } from './stores/userStore';
import { motion, useMotionValue, useTransform } from 'motion/react';
const App = () => {
	const { name, age, sex, setAge, setName, setSex } = userStore();

	const handelChangeName = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};
	const handelChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
		setAge(+e.target.value);
	};
	const handelChangeSex = (e: ChangeEvent<HTMLInputElement>) => {
		setSex(e.target.value as SexEnum);
	};

	useEffect(() => {
		console.log('setName');
	}, [name]);

	return (
		<div className="">
			<h1 className="text-2xl">{name}</h1>
			<h1 className="text-2xl">{age}</h1>
			<h1 className="text-2xl">{sex}</h1>

			<section className="p-10 flex flex-col gap-10">
				<input
					className="input"
					placeholder="请输入姓名"
					onChange={handelChangeName}
				/>
				<input
					className="input"
					placeholder="请输入年龄"
					onChange={handelChangeAge}
				/>
				<input
					className="input"
					placeholder="请输入性别"
					onChange={handelChangeSex}
				/>
			</section>

			<motion.div
				className="px-4 py-2 border border-amber-300"
				initial={{ x: '-100%' }}
				animate={{ y: 100 }}
				transition={{
					duration: 1
				}}
				drag
				// whileHover={{ y: [0, -10, 0] }}
			>
				123
			</motion.div>

			<motion.div
				className="px-4 py-2 border border-amber-300 w-200 h-200 bg-black/50  grayscale-50 bg-[url('https://images.unsplash.com/photo-1738251396922-b6ef53f67b72?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-contain bg-center "
				animate={{}}
				drag
			>
				你好
			</motion.div>

			<img
				className="w-100 h-100 object-cover "
				src="https://images.unsplash.com/photo-1738251396922-b6ef53f67b72?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt=""
			/>
		</div>
	);
};

export default App;
