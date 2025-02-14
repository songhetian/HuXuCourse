const topics = [
	'Technology',
	'Design Thinking',
	'Crypto',
	'NFT',
	'Personal Growth',
	'Reading'
];

const TopicsList = () => {
	return (
		<div className="section-div">
			<h3 className="h3-base">Topics for you</h3>
			<div className="flex flex-wrap gap-2">
				{topics.map((topic, index) => (
					<span
						key={index}
						className="px-3 py-1 bg-gray-200 text-gray-700 text-sm  rounded-full cursor-pointer hover:bg-gray-300"
					>
						{topic}
					</span>
				))}
			</div>
		</div>
	);
};

export default TopicsList;
