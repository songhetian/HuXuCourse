'use server';
import prisma from '@/utils/prisma';

export async function createMovie(formData: FormData) {
	const title = formData.get('title') as string;
	const description = formData.get('description') as string;
	const imageUrl = formData.get('imageUrl') as string;
	const movie = await prisma.movie.create({
		data: {
			title: title,
			description: description,
			image: imageUrl
		}
	});
	console.log(movie);
}

export async function getAllMovies() {
	const movies = await prisma.movie.findMany({
		omit: {
			createdAt: true,
			updatedAt: true
		}
	});
	return movies;
}
