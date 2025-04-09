'use client';
import { use, useMemo, useState } from 'react';
import { initialItems } from './data';

const MemoHook = () => {
	// const arr = Array.from({ length: 1000 }, (_, index) => index);

	const [count, setCount] = useState<number>(0);
	const [items] = useState<{ id: number; isSelected: boolean }[]>(initialItems);

	const selectedItem = useMemo(
		() => items.find(item => item.id === count),
		[items, count]
	);
	return (
		<div className="ml-10 mt-10">
			<h1>count : {count}</h1>
			<h1>Selected Item :{selectedItem?.id}</h1>
			<button
				className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md"
				onClick={() => setCount(count + 1)}
			>
				Increment
			</button>
		</div>
	);
};

export default MemoHook;
