import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchData = async () => {
	const res = await axios.get('https://jsonplaceholder.typicode.com/todos');

	return res.data;
};

const WithTanstackQuery = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['todos'],
		queryFn: fetchData
	});
	if (error) return <h1>{error.message}</h1>;
	return (
		<div>
			{isLoading && <h1>Loading...</h1>}
			<h1>{JSON.stringify(data, null, 2)}</h1>
		</div>
	);
};

export default WithTanstackQuery;
