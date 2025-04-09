'use client';

import React, { use, useEffect, useState } from 'react';

const TranstionHook = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				await new Promise(resolve => {
					setTimeout(() => resolve('去欸的那个'), 5000);
				});
				const res = await fetch('https://dummyjson.com/users');
				if (!res.ok) throw new Error('错误');
				const da = await res.json();
				setData(da.users);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	return (
		<div>
			{data && data.map(user => <p key={user?.id}>{user?.firstName}</p>)}
		</div>
	);
};

export default TranstionHook;
