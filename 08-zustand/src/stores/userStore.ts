import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface userTypes {
	name: string;
	age: number;
	sex: SexEnum;
	setName: (name: string) => void;
	setAge: (age: number) => void;
	setSex: (sex: SexEnum) => void;
}

export enum SexEnum {
	'girl' = '女',
	'boy' = '男'
}

export const userStore = create(
	immer<userTypes>(set => ({
		name: '123',
		age: 200,
		sex: SexEnum.boy,
		setName(name: string) {
			set(state => {
				state.name = name;
			});
		},
		setAge(age: number) {
			set(state => {
				state.age = age;
			});
		},
		setSex(sex: SexEnum) {
			set(state => {
				state.sex = sex;
			});
		}
	}))
);
