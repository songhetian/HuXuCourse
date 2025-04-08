import { prisma } from '@/utils/db';
import { redirect } from 'next/navigation';
import { todo } from 'node:test';
import React from 'react';

const TodoComponent = async () => {
	async function createTodo(formData: FormData) {
		'use server';

		const input = formData.get('input') as string;

		await prisma.todo.create({
			data: {
				input: input
			}
		});

		redirect('/server');
	}

	async function editTodo(formData: FormData) {
		'use server';
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
		'use server';
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

	return (
		<div className="h-screen w-screen bg-gray-100 flex items-center justify-center p-4">
			<div className="bg-white rounded-xl shadow-2xl p-8 ">
				<form action={createTodo} className="flex flex-col gap-4">
					<input
						type="text"
						name="input"
						className="px-4 py-2 border-2 border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
					/>
					<button
						type="submit"
						className="bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300"
					>
						Add Todo
					</button>
				</form>

				<div className="mt-8 space-y-4">
					{data.map(todo => (
						<form
							action={editTodo}
							key={todo.id}
							className="flex items-center justify-between space-x-4"
						>
							<input type="hidden" name="inputId" value={todo.id} />
							<input
								type="text"
								name="input"
								className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus: ring-2 focus:ring-pink-300"
								defaultValue={todo.input}
							/>
							<div className="flex space-x-2">
								<button
									type="submit"
									className="px-4 py-2 bg-pink-500 rounded-lg text-white hover:bg-pink-600 cursor-pointer transition duration-300"
								>
									Save
								</button>
								<button
									className="px-4 py-2 bg-red-500 rounded-lg text-white hover:bg-red-600 cursor-pointer transition duration-300"
									formAction={deleteTodo}
								>
									Delete
								</button>
							</div>
						</form>
					))}
				</div>
			</div>
		</div>
	);
};

export default TodoComponent;
