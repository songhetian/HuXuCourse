'use client';

import { useRouter } from 'next/navigation';

const Page = () => {
	const router = useRouter();
	return (
		<div
			className="w-full h-screen bg-black/90 absolute inset-0 text-white "
			onClick={() => router.push('/game')}
		>
			fasdfdsafdsafd
		</div>
	);
};

export default Page;
