'use client';

import { useEffect, useState } from 'react';

const fetchData = async () => {
	const res = await fetch('https://dummyjson.com/users');
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	const data = await res.json();
	return data;
};

type userProps = {
	id: number;
	firstName: string;
	lastName: string;
	age: number;
};

const FetchComponents = () => {
	const [data, setData] = useState<userProps[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true);
				const res = await fetch('https://dummyjson.com/users');
				if (!res.ok) {
					throw new Error('Failed to fetch data');
				}
				const data = await res.json();
				setData(data.users);
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message);
				}
			} finally {
				setIsLoading(false);
			}
		};
		getData();
	}, []);
	if (isLoading) return <h1>Loading...</h1>;
	return (
		<div>
			{error && <h1>{error}</h1>}
			<ul>
				{data &&
					data.map(user => (
						<li key={user.id}>
							{user.firstName}-{user.lastName}
							<p>年龄:{user.age}</p>
						</li>
					))}
			</ul>
		</div>
	);
};

export default FetchComponents;
