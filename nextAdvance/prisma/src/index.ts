import { PrismaClient } from '@prisma/client';
import { log } from 'console';
const prisma = new PrismaClient();

async function createMovie() {
	const newMovie = await prisma.movie.create({
		data: {
			title: '盗梦空间',
			description: '这是一个盗梦空间电影的简介 这个电影很好看 ',
			genre: '科幻',
			releaseDate: new Date(),
			rating: 9.0
		}
	});
	console.log(newMovie);
}

async function createMultipleMovies() {
	const movies = await prisma.movie.createMany({
		data: [
			{
				title: '盗梦空间1',
				description: '这是一个盗梦空间电影的简介 这个电影很好看 ',
				genre: '科幻',
				releaseDate: new Date(),
				rating: 10.0
			},
			{
				title: '盗梦空间2',
				description: '这是一个盗梦空间电影的简介 这个电影很好看 ',
				genre: '科幻',
				releaseDate: new Date(),
				rating: 5.0
			},
			{
				title: '盗梦空间3',
				description: '这是一个盗梦空间电影的简介 这个电影很好看 ',
				genre: '科幻',
				releaseDate: new Date(),
				rating: 6.0
			},
			{
				title: '新电影',
				description: '这是一个新电影的简介 这个电影很好看 ',
				genre: '人文',
				releaseDate: new Date(),
				rating: 10.0
			}
		]
	});
}

//获取所有电影
async function getMovies() {
	const movies = await prisma.movie.findMany({
		skip: 0,
		take: 2,
		where: {
			id: {
				gt: 1
			}
		},
		orderBy: {
			id: 'desc'
		}
	});
	return movies;
}

//获取单个电影
async function getOneMovies(movieId: number) {
	const movie = await prisma.movie.findUnique({
		// select: { title: true },
		omit: { id: true },
		where: { id: 1 }
	});
	console.log(movie);
}

//修改
async function updateMovie() {
	const updateMovie = await prisma.movie.update({
		where: { id: 1 },
		data: {
			title: 'dao meng kong jian'
		}
	});
}

//删除

async function deleteMovie(movieId: number) {
	const movie = await prisma.movie.delete({
		where: { id: movieId }
	});
}

async function main() {
	// await createMovie();
	// await createMultipleMovies();
	const movies = await getMovies();
	console.log(movies);

	await getOneMovies(2);

	await updateMovie();

	await deleteMovie(5);
}

//断开连接
main()
	.then(async () => await prisma.$disconnect())
	.catch(async e => {
		console.log(e);
		await prisma.$disconnect();
		process.exit(1);
	});
