import Link from 'next/link';
import imageList from '@/data/image';

const Page = async () => {
	// await new Promise(resolve => {
	// 	setTimeout(() => {
	// 		resolve('success');
	// 	}, 4000);
	// });

	return (
		<div className="flex gap-1 justify-center items-center flex-wrap  ">
			{imageList.map(image => (
				<div key={image.id} className="basis-60  overflow-hidden">
					<Link href={`/home/${image.id}`}>
						<img
							src={image.url}
							alt={image.description}
							className="hover:scale-105 transition duration-500"
						/>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Page;
