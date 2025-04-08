import imageList from '@/data/image';
import Image from 'next/image';
import React from 'react';

const Page = async ({ params }: { params: { id: string } }) => {
	const { id } = await params;
	const imgUrl = imageList.find(image => image.id === +id)?.url as string;
	return (
		<div className="absolute inset-0 bg-black/80 w-full h-screen flex justify-center items-center">
			<Image
				src={imgUrl}
				width={700}
				height={700}
				alt="tupian"
				className="object-cover"
			></Image>
		</div>
	);
};

export default Page;
