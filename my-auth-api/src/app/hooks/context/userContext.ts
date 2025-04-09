import { createContext, ReactNode } from 'react';

export type User = {
	name: string;
	age: number;
	sex: Sex;
};

export enum Sex {
	girl = '女',
	boy = '男'
}

const user: User = {
	name: 'john',
	age: 100,
	sex: Sex.boy
};

export const UserContext = createContext<User>(user);
