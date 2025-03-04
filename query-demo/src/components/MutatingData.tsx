import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { FormEvent, useState } from 'react';

interface Todo {
	id?: number;
	title: string;
	completed: boolean;
}
const postTodo = async (newTodo: Todo) => {
	const res = await axios.post(
		'https://jsonplaceholder.typicode.com/todos',
		newTodo
	);

	return res.data;
};

const fetchData = async () => {
	const res = await axios.get('https://jsonplaceholder.typicode.com/todos/201');
	return res.data;
};

const MutatingData = () => {
	const queryClient = useQueryClient();
	const [title, setTitle] = useState('');
	const { mutate, error, status } = useMutation<Todo>({
		mutationFn: postTodo,
		onSuccess: () => {
			queryClient.invalidateQueries(['todos']);
		},
		onError: error => {
			console.error('Error posting todo:', error);
		}
	});

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (title.trim() === '') return;
		mutate({ title, completed: false });
		setTitle('');
	};

	const { data } = useQuery({
		queryKey: ['todos'],
		queryFn: fetchData
	});

	return (
		<div>
			<h1>查询</h1>
			<p>{JSON.stringify(data, null, 2)}</p>
			<h1>Create New Todo</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={title}
					onChange={e => setTitle(e.target.value)}
					placeholder="Enter todo title"
				/>
				<button type="submit" disabled={status === 'pending'}>
					{status === 'pending' ? 'Adding...' : 'Add Todo'}
				</button>
				{error && <div>An error occurred: {error.message}</div>}
				{status === 'success' && <div>Todo added successfully!</div>}
			</form>
		</div>
	);
};

export default MutatingData;
