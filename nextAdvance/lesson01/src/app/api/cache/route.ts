export const dynamic = 'force-static';
// export const revalidata = 10;

export async function GET() {
	return Response.json({ time: new Date().toLocaleTimeString() });
}
