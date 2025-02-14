import UserCard from './UserCard';

export type People = {
	name: string;
	following: boolean;
};

const peopleToFollow: People[] = [
	{ name: 'Alena Gouse', following: false },
	{ name: 'Ruben Bator', following: true },
	{ name: 'Aspen Stanton', following: false },
	{ name: 'Madelyn George', following: false }
];

const PeopleToFollow = () => {
	return (
		<div className="bg-white p-4 rounded-lg shadow">
			<h3 className="font-semibold text-lg mb-4"></h3>
			<div className="space-y-4">
				{peopleToFollow.map((people, index) => (
					<UserCard key={index} person={people} />
				))}
			</div>
		</div>
	);
};

export default PeopleToFollow;
