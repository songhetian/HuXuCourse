import userStore from '../store/userStore';
import { useAppleStore } from '../store/useStore';

const ChildComponent = () => {
	const { increment, decrement } = userStore();
	const {
		price,
		count,
		color,
		increment: inc,
		decrement: dec
	} = useAppleStore();
	return (
		<div>
			<h1>{price}</h1>
			<h1>{count}</h1>
			<h1>{color}</h1>

			<button onClick={() => inc()}>change</button>
			<button onClick={() => dec()}>changeName</button>
			<button
				onClick={() => decrement()}
				className="px-3 py-2 border border-blue-400 bg-blue-400  shadow-xl rounded-full "
			>
				减少
			</button>
			<button
				onClick={() => increment()}
				className="px-3 py-2 border border-blue-400 bg-blue-400  shadow-xl rounded-full"
			>
				增加
			</button>
		</div>
	);
};

export default ChildComponent;
