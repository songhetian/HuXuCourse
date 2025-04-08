import Count from './count';

const Home = ({ searchParams }: { searchParams: { id: string } }) => {
	const { id } = searchParams;
	return (
		<div>
			<h1>{id}</h1>
			<Count />
		</div>
	);
};

export default Home;
