import Users from '@/components/users';
import React, { Suspense } from 'react';

const Loading = () => {
	return (
		<div>
			<h1>我是loading页面</h1>
			{/* <Suspense fallback={<h1>Loading....</h1>}> */}
			<Users />
			{/* </Suspense> */}
		</div>
	);
};

export default Loading;
