import { FaUserCircle } from 'react-icons/fa';

type User = {
	name: string;
	following: boolean;
};

interface UserCardProps {
	person: User;
}

function UserCard({ person }: UserCardProps) {
	return (
		<div className="flex items-center justify-between">
			<section className="flex items-center">
				<FaUserCircle className="text-3xl mr-3 text-gray-500" />
				<span>{person.name}</span>
			</section>
			<button>{person.following ? 'Following' : 'Follow'}</button>
		</div>
	);
}

export default UserCard;
