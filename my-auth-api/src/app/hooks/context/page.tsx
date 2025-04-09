'use client';

import { useContext } from 'react';
import { Sex, User, UserContext } from './userContext';

const ContextHook = () => {
	const user: User = { name: 'test', age: 100, sex: Sex.boy };
	return (
		<div>
			<UserContext.Provider value={user}>
				<Children />
			</UserContext.Provider>
		</div>
	);
};

const Children = () => {
	const user = useContext(UserContext);
	return (
		<div>
			<h1>{user.name}</h1>
			<h1>{user.age}</h1>
			<h1>{user.sex}</h1>
		</div>
	);
};

export default ContextHook;
