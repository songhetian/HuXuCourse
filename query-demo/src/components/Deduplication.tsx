import { useQuery } from '@tanstack/react-query';

const getRandomNumber = () => {
	return Promise.resolve(Math.random());
};

// 去重
const Deduplication = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['random'],
		queryFn: getRandomNumber,
		staleTime: 1000,
		refetchInterval: 1000
	});
	if (isLoading) return <h1>Loading...</h1>;
	if (error) return <h1>{error.message}.</h1>;
	return (
		<div>
			<h1 className="text-4xl text-blue-400">{data}</h1>
		</div>
	);
};

export default Deduplication;
