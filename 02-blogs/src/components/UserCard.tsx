import { FaUserCircle } from 'react-icons/fa';
import { People } from './PeopleToFollow';

interface UserCardProps {
	person: People;
}

const UserCard = ({ person }: UserCardProps) => {
	return (
		<div className="flex items-center justify-between">
			<section className="flex items-center">
				<FaUserCircle className="text-3xl mr-3 text-gray-500" />
				<span>{person.name}</span>
			</section>
			<button>{person.following ? '已关注' : '关注'}</button>
		</div>
	);
};

export default UserCard;
