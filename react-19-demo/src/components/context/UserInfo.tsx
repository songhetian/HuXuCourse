import { UserContext } from '../Context';
import { use } from 'react';

function UserInfo() {
	const { name, age } = use(UserContext);
	return (
		<div>
			<p>{name}</p>
			<p>{age}</p>
		</div>
	);
}

export default UserInfo;
