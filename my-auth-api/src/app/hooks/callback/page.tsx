'use client';

import { memo, useCallback, useState } from 'react';

const Children = memo(({ name }: { name: string }) => {
	console.log('渲染一次');
	return <h1>{name}</h1>;
});
type propsFn = {
	handelClick: () => void;
};

const ChildrenOne = memo(({ handelClick }: propsFn) => {
	console.log('渲染一次1');
	return (
		<h1
			onClick={() => {
				handelClick();
			}}
		>
			1234
		</h1>
	);
});

const CallBackHook = () => {
	const [count, setCount] = useState<number>(0);
	const handleClick = useCallback(() => {
		console.log('Button clicked2');
	}, []); // 依赖数组为空，函数只在组件挂载时创建一次
	return (
		<div>
			<h1>{count}</h1>
			<button className="btn" onClick={() => setCount(count + 1)}>
				zengjia
			</button>
			<Children name={'大放大算法'} />
			<ChildrenOne handelClick={handleClick} />
		</div>
	);
};

export default CallBackHook;
