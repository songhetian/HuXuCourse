import { forwardRef, Ref, useImperativeHandle, useState } from 'react';

export type CounterRef = {
	reset: () => void;
};

const Counter = (props: any, ref: Ref<CounterRef>) => {
	const [count, setCount] = useState<number>(0);

	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		setCount(count - 1);
	};

	const reset = () => {
		setCount(0);
	};

	useImperativeHandle(ref, () => ({
		reset
	}));

	return (
		<div>
			<h1>{count}</h1>
			<button className="btn" onClick={() => increment()}>
				-
			</button>
			<button className="btn" onClick={() => decrement()}>
				+
			</button>
			<button className="btn" onClick={() => reset()}>
				重置
			</button>
		</div>
	);
};

export default forwardRef(Counter);
