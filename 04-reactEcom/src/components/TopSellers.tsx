import { useState, useEffect } from 'react';

interface Author {
	name: string;
	isFollowing: boolean;
	image: string;
}

const TopSellers = () => {
	const [authors, setAuthors] = useState<Author[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`https://randomuser.me/api/?results=5`);
				const data = await res.json();
				const authorsData = data.results.map((user: any) => ({
					name: `${user.name.title} ${user.name.first} ${user.name.last}`,
					isFollowing: false,
					image: user.picture.medium
				}));

				setAuthors(authorsData);
			} catch (error) {
				console.log(`Error fetching authors:${error}`);
			}
		};
		fetchData();
	}, []);

	const handleFollowClick = (index: number) => {
		setAuthors(
			authors.map((author, i) =>
				index === i ? { ...author, isFollowing: !author.isFollowing } : author
			)
		);
	};
	return (
		<div className="bg-white p-5 mx-5 mt-[5rem] border w-[100%] rounded">
			<h2 className="text-xl font-bold mb-5">Top Sellers</h2>
			<ul>
				{authors.map((author, index) => (
					<li key={index} className="flex items-center justify-between mb-4">
						<section className="flex justify-center items-center">
							<img
								src={author.image}
								alt={author.name}
								className="w-[50%] h-[50%] justify-center rounded-full"
							/>
						</section>
						<button
							onClick={() => handleFollowClick(index)}
							className={`py-1 px-3 rounded ${
								author.isFollowing
									? 'bg-red-500 text-white'
									: 'bg-black text-white'
							}`}
						>
							{author.isFollowing ? 'UnFollow' : 'Follow'}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TopSellers;
