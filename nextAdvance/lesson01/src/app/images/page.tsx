import Link from 'next/link';
import Image from 'next/image';
import imageList from '@/data/image';

const Page = () => {
	// await new Promise(resolve => {
	// 	setTimeout(() => {
	// 		resolve('success');
	// 	}, 4000);
	// });

	return (
		<div className="flex gap-1 justify-center items-center flex-wrap  ">
			{imageList.map(image => (
				<div key={image.id} className="basis-60  overflow-hidden">
					<Link href={`/images/${image.id}`}>
						<Image
							src={image.url}
							alt={image.description}
							width={500} // Replace with appropriate width
							height={500} // Replace with appropriate height
							className="hover:scale-105 transition duration-500"
						/>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Page;
