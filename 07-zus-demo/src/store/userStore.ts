import { create } from 'zustand';
interface userProps {
	counter: number;
	increment: () => void;
	decrement: () => void;
}
const userStore = create<userProps>(set => ({
	counter: 0,
	increment: () => set(state => ({ counter: state.counter + 1 })),
	decrement: () => set(state => ({ counter: state.counter - 1 }))
}));

export default userStore;
