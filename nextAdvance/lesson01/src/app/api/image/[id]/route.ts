import imageList from '@/data/image';

export async function GET(
	_request: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;
	const image = imageList.find(image => image.id === +id);
	return Response.json(image);
}

export async function PUT(
	_request: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	const image = await _request.json();
	const { id } = await params;
	const index = imageList.findIndex(image => image.id === +id);
	imageList[index] = { ...imageList[index], ...image };
	return new Response(JSON.stringify(imageList[index]), {
		headers: { 'Content-Type': 'application/json' },
		status: 201
	});
}

export async function DELETE(
	_request: Request,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;
	const index = imageList.findIndex(image => image.id === parseInt(id));
	const deleteImage = imageList[index];
	imageList.splice(index, 1);
	return Response.json(deleteImage);
}
