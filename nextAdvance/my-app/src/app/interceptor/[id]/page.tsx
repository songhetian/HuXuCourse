'use client';

import { useRouter } from 'next/navigation';

const Info = ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const router = useRouter();

	return (
		<div>
			Info{id}
			<button className="btn" onClick={() => router.back()}>
				上一页
			</button>
		</div>
	);
};

export default Info;
