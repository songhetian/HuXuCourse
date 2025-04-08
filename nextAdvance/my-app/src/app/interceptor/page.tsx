import Link from 'next/link';

const Interceptor = () => {
	return (
		<div>
			<ul className="flex gap-10 mx-auto ml-10 mt-10">
				{[1, 2, 3, 4].map(id => (
					<li
						key={id}
						className="bg-blue-300 text-white py-2 px-4 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 "
					>
						<Link href={`/interceptor/${id}`}>页面{id}</Link>
					</li>
				))}
			</ul>
			<Link href={`/game`}>game</Link>
		</div>
	);
};

export default Interceptor;
