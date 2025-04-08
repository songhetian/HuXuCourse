import { cookies, headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
	// const requestHeaders = new Headers(request.headers);
	const requestHeaders = await headers();
	console.log(requestHeaders.get('Authorization'));
	const cookiesStore = await cookies();
	cookiesStore.set('name', 'john');
	console.log(cookiesStore.get('name'));

	return Response.json({ header: requestHeaders });
}

export async function POST() {
	const cookieStore = await cookies();
	console.log(cookieStore.get('name'));
	return Response.json({ name: '12345' });
}
