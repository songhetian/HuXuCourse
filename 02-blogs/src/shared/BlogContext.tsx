import { createContext, FC, ReactNode, useContext, useState } from 'react';
import { Blog } from '../types';

interface BlogContextType {
	blogs: Blog[];
	addBlog: (blog: Blog) => void;
	updateBlog: (blog: Blog) => void;
	deleteBlog: (id: number) => void;
}

const BlogContext = createContext<BlogContextType>({
	blogs: [],
	addBlog: () => {},
	updateBlog: () => {},
	deleteBlog: () => {}
});

const BlogProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [blogs, setBlogs] = useState<Blog[]>([]);

	const addBlog = (blog: Blog) => {
		setBlogs([...blogs, blog]);
	};
	const updateBlog = (updatedBlog: Blog) => {
		setBlogs(
			blogs.map(blog => (blog.id === updatedBlog.id ? updatedBlog : blog))
		);
	};
	const deleteBlog = (id: number) => {
		const newBlogs = blogs.filter(blog => blog.id !== id);

		setBlogs(() => newBlogs);
	};

	return (
		<BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
			{children}
		</BlogContext.Provider>
	);
};

const useBlogs = () => {
	return useContext(BlogContext);
};

export { BlogProvider, useBlogs };
