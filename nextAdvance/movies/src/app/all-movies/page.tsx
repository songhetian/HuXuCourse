import { getAllMovies } from '@/actions';
import ShowMovie from '@/components/custom-components/ShowMovie';

const AlLMovies = async () => {
	const movies = await getAllMovies();
	return (
		<div className="flex items-center justify-center h-screen w-screen bg-gray-100">
			{movies &&
				movies.map(movie => (
					<div key={movie.id}>
						<ShowMovie
							id={movie.id}
							title={movie.title}
							description={movie.description}
							image={movie.image}
						/>
					</div>
				))}
		</div>
	);
};

export default AlLMovies;
