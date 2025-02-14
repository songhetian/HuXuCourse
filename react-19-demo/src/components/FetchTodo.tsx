import { use } from 'react';
import axios from 'axios';

interface Todo {
	user_id: number;
	title: string;
	id: number;
	completed: boolean;
}

const fetchData = async (): Promise<Todo> => {
	const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
	return res.data;
};

const TodoPromise = fetchData();
function FetchTodo() {
	const data = use(TodoPromise);
	return <div className="text-red-300">{data.title}</div>;
}

export default FetchTodo;
