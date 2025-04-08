'use client';

import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const ClientComponent = () => {
	const { data, isLoading, error } = useSWR(
		'https://dummyjson.com/users',
		fetcher
	);
	if (error) throw new Error(error);
	return (
		<div>
			{isLoading && <h1>加载中...</h1>}
			<ul>
				{data.users.map(user => (
					<li key={user.id}>{user.id}</li>
				))}
			</ul>
		</div>
	);
};

export default ClientComponent;
