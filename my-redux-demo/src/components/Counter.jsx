import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../features/counter/CounterSlice';

const Counter = () => {
	const value = useSelector(state => state.counter.value);
	const dispatch = useDispatch();
	return (
		<div>
			{value}

			<div>
				<button onClick={() => dispatch(increment())}>-</button>
				<button onClick={() => dispatch(decrement())}>+</button>
			</div>
		</div>
	);
};

export default Counter;
