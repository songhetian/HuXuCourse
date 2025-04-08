'use client';

import { useRouter } from 'next/navigation';

const Page = () => {
	const router = useRouter();
	return (
		<div>
			<button onClick={() => router.push('/members/salaries/10')}>
				上一页
			</button>
		</div>
	);
};

export default Page;
