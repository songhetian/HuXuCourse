import { createContext } from 'react';
import UserInfo from './context/userInfo';

export interface userInfo {
	name: string;
	age: number;
}

export const UserContext = createContext<userInfo>({
	name: '',
	age: 0
});

function Context() {
	return (
		<UserContext value={{ name: 'song', age: 120 }}>
			<UserInfo />
		</UserContext>
	);
}

export default Context;
