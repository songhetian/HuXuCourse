import images from '@/data/image';

const Image = ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const imageUrl = images.find(image => image.id === +id)?.url;
	return (
		<div>
			<img src={imageUrl} alt="test" />
		</div>
	);
};

export default Image;
