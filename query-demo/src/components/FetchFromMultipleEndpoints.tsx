import { useQueries } from '@tanstack/react-query';
import axios from 'axios';

interface todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

type post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

const fetchTodos = async () => {
	const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
	return res.data;
};
const fetchPosts = async () => {
	const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
	return res.data;
};

const FetchFromMultipleEndpoints = () => {
	const [{ data: todos }, { data: posts }] = useQueries({
		queries: [
			{
				queryKey: ['todos'],
				queryFn: fetchTodos,
				staleTime: 10000,
				select: (data: todo[]) => data.filter(item => item.id === 100)
				// refetchInterval: 1000
			},
			{
				queryKey: ['posts'],
				queryFn: fetchPosts,
				select: (data: post[]) => data.filter(item => item.id === 100)
			}
		]
	});

	return (
		<div>
			<h1>{JSON.stringify(todos, null, 2)}</h1>
			{}
			<h1>{JSON.stringify(posts, null, 2)}</h1>
			{}
		</div>
	);
};

export default FetchFromMultipleEndpoints;
