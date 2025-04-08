export const dynamicParams = false;
import imageList from '@/data/image';

export async function generateStaticParams() {
	return [{ id: '1' }, { id: '2' }];
}

export const page = async ({ params }: { params: { id: string } }) => {
	const { id } = await params;
	// const imgUrl = imageList.find(image => image.id === +id)?.url;
	return (
		// <div>
		// 	<img src={imgUrl} alt="1234" />
		// </div>
		<h1>
			{id} is {new Date().toLocaleTimeString()}
		</h1>
	);
};

export default page;
