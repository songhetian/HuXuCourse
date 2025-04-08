'use client';

import { useState } from 'react';

const Count = () => {
	const [num, setNum] = useState<number>(0);
	return (
		<div>
			<h1>{num}</h1>
			<button
				className="px-4 py-2 bg-blue-300 rounded-2xl text-white font-semibold"
				onClick={() => setNum(num + 1)}
			>
				点击
			</button>
		</div>
	);
};

export default Count;
