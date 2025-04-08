import { createMovie } from '@/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AddMovie = async () => {
	return (
		<div className="w-10/12 mx-auto p-10">
			<h1 className="text-4xl font-bold mb-4">Add a New Movie</h1>
			<form action={createMovie} className="flex flex-col gap-4">
				<Label htmlFor="title">Title</Label>
				<Input type="text" name="title" required />

				<Label htmlFor="description">Title</Label>
				<textarea
					className="w-full p-2 border rounded"
					name="description"
					required
				/>

				<Label htmlFor="imageUrl">ImageUrl</Label>
				<Input type="text" name="imageUrl" required />

				<Button
					type="submit"
					className="cursor-pointer hover:bg-blue-200 transition duration-300"
				>
					Add Movie
				</Button>
			</form>
		</div>
	);
};

export default AddMovie;
