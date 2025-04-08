import imageList from '@/data/image';
import { NextRequest } from 'next/server';

export async function GET(_request: NextRequest) {
	const searchParams = await _request.nextUrl.searchParams;
	const query = searchParams.get('query');
	console.log(query);
	return Response.json(imageList);
}

export async function POST(request: Request) {
	const image = await request.json();
	const newImage = { ...image, id: imageList.length + 1 };
	imageList.push(newImage);
	return new Response(JSON.stringify(newImage), {
		headers: { 'Content-Type': 'application/json' },
		status: 201
	});
}
