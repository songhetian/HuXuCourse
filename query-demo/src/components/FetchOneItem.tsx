import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
const fetchTodo = async (id: number) => {
	const res = await axios.get(
		`https://jsonplaceholder.typicode.com/todos/${id}`
	);
	return res.data;
};
const FetchOneItem = () => {
	const [currentId, setCurrentId] = useState(1);
	const { data, isLoading, error } = useQuery({
		queryKey: ['todos', currentId],
		queryFn: () => fetchTodo(currentId)
	});
	if (isLoading) return <h1>Loading...</h1>;
	if (error) return <h1>{error.message}</h1>;
	return (
		<div>
			<h1>{JSON.stringify(data, null, 2)}</h1>
			<button
				className="px-4 py-2 bg-amber-300 shadow rounded-2xl"
				onClick={() => setCurrentId(prev => prev + 1)}
			>
				下一个
			</button>
		</div>
	);
};

export default FetchOneItem;
