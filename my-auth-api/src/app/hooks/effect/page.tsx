'use client';

import { use, useEffect, useState } from 'react';

const EffectHook = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [data, setData] = useState<any>();
	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				await new Promise(resolve => {
					setTimeout(() => resolve('去欸的那个'), 5000);
				});
				const res = await fetch('https://dummyjson.com/users');
				if (!res.ok) throw new Error('错误');
				const data = await res.json();
				setData(data.users);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);
	if (isLoading) return <h1>记载中...</h1>;
	return (
		<div>
			<ul>
				{data && data.map(user => <li key={user.id}>{user.firstName}</li>)}
			</ul>
		</div>
	);
};

export default EffectHook;
