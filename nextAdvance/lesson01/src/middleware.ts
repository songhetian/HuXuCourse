import { NextRequest, NextResponse } from 'next/server';
import { config } from 'process';

export function middleware(request: NextRequest) {
	if (request.nextUrl.pathname === '/images') {
		// return NextResponse.redirect(new URL('/', request.url));
		return NextResponse.rewrite(new URL('/', request.url));
	}

	const response = NextResponse.next();
	if (!request.cookies.get('name')) {
		response.cookies.set('name', 'test');
	}
	response.headers.set('custom', 'custom');
	return response;
}

export const config = {
	matcher: '/about/:path*'
};
