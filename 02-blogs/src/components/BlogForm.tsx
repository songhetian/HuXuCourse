import { FC, useEffect, useState } from 'react';
import { Blog } from '../types';
import { useBlogs } from '../shared/BlogContext';

interface BlogFormProps {
	existingBlog: Blog | null;
	onClose: () => void;
}

const BlogForm: FC<BlogFormProps> = ({ existingBlog, onClose }) => {
	const { addBlog, updateBlog } = useBlogs();
	const [title, setTitle] = useState<string>(existingBlog?.title || '');
	const [description, setDescription] = useState<string>(
		existingBlog?.description || ''
	);
	const [image, setImage] = useState(existingBlog?.image || '');
	const [time, setTime] = useState(existingBlog?.time || '');

	useEffect(() => {
		if (existingBlog) {
			setTime(existingBlog.time);
			setImage(existingBlog.image);
			setTitle(existingBlog.title);
			setDescription(existingBlog.description);
		}
	}, [existingBlog]);
	console.log(existingBlog);
	const handleSubmit = () => {
		const blog: Blog = {
			id: existingBlog ? existingBlog.id : Date.now(),
			title,
			description,
			time,
			image
		};

		if (existingBlog) {
			updateBlog(blog);
		} else {
			addBlog(blog);
		}

		onClose();
	};
	return (
		<div className="bg-white p-6 rounded-lg w-120 mx-auto">
			<h3 className="font-semibold text-xl mb-2 text-gray-800">
				{existingBlog ? 'Edit Blog' : 'Add Blog'}
			</h3>
			<div className="space-y-4">
				<input
					type="text"
					name=""
					defaultValue={title}
					placeholder="Title"
					className="inputElement"
					onChange={e => setTitle(e.target.value)}
				/>

				<textarea
					placeholder="Description"
					value={description}
					className="inputElement resize-none h-32"
					onChange={e => setDescription(e.target.value)}
				/>

				<input
					type="text"
					placeholder="Image Url"
					className="inputElement"
					onChange={e => setImage(e.target.value)}
					value={image}
				/>

				<input
					type="date"
					onChange={e => setTime(e.target.value)}
					value={time}
				/>
			</div>

			<section className="flex justify-end mt-6 space-x-6">
				<button
					onClick={handleSubmit}
					className="inputElement hover:bg-blue-700"
				>
					{existingBlog ? '修改' : '添加'}
				</button>
				<button onClick={onClose} className="inputElement hover:bg-blue-700 ">
					關閉
				</button>
			</section>
		</div>
	);
};

export default BlogForm;
