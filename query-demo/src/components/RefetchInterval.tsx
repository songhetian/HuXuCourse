import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState, useEffect } from 'react';
const fetchTodo = async (id: number) => {
	const res = await axios.get(
		`https://jsonplaceholder.typicode.com/todos/${id}`
	);
	return res.data;
};
const RefetchInterval = () => {
	const [currentId, setCurrentId] = useState(1);
	const { data, isLoading, error } = useQuery({
		queryKey: ['todos', currentId],
		queryFn: () => fetchTodo(currentId),
		refetchInterval: 1000,
		staleTime: 1000
	});

	useEffect(() => {
		const interval = setTimeout(() => {
			setCurrentId(prevId => (prevId < 200 ? prevId + 1 : 1));
		}, 5000);

		return () => clearInterval(interval);
	}, []);
	if (isLoading) return <h1>Loading...</h1>;
	if (error) return <h1>{error.message}</h1>;
	return (
		<div>
			<h1>{JSON.stringify(data, null, 2)}</h1>
			<button
				className="px-4 py-2 bg-amber-300 shadow rounded-2xl"
				onClick={() => setCurrentId(prevId => (prevId < 200 ? prevId + 1 : 1))}
			>
				下一个
			</button>
		</div>
	);
};

export default RefetchInterval;
