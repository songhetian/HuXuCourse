const topics = [
	'Technology',
	'Design Thinking',
	'Crypto',
	'NFT',
	'Personal Growth',
	'Reading'
];
function TopicsList() {
	return (
		<div className="bg-white p-4 rounded-lg shadow mt-8">
			<h3 className="font-semibold text-lg mb-4">
				<div className="flex flex-wrap gap-2">
					{topics.map((topic, index) => (
						<span
							key={index}
							className="px-3 py-1 bg-gray-300 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-red-300"
						>
							{topic}
						</span>
					))}
				</div>
			</h3>
		</div>
	);
}

export default TopicsList;
