'use server';

import { prisma } from '@/utils/db';
import { redirect } from 'next/navigation';

async function createTodo(formData: FormData) {
	const input = formData.get('input') as string;

	await prisma.todo.create({
		data: {
			input: input
		}
	});

	redirect('/server');
}

async function editTodo(formData: FormData) {
	const id = formData.get('inputId') as string;
	const input = formData.get('input') as string;

	const todo = await prisma.todo.update({
		where: { id: id },
		data: {
			input: input
		}
	});

	redirect('/server');
}

async function deleteTodo(formData: FormData) {
	const id = formData.get('inputId') as string;

	const todo = await prisma.todo.delete({
		where: { id: id }
	});
	redirect('/server');
}

const data = await prisma.todo.findMany({
	select: {
		input: true,
		id: true
	},

	orderBy: {
		id: 'desc'
	}
});
