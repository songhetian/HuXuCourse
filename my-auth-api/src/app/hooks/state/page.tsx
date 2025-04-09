'use client';

import { useState } from 'react';

const StateHook = () => {
	const [count, setCount] = useState<number>(0);
	return (
		<div>
			<h1>{count}</h1>
			<button className="btn" onClick={() => setCount(c => c + 1)}>
				增加
			</button>
		</div>
	);
};

export default StateHook;
