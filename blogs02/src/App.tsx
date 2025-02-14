import { IoMdAddCircle } from 'react-icons/io';
import Navigation from './components/Navigation';
import PeopleToFollow from './components/PeopleToFollow';
import TopicsList from './components/TopicsList';
import TrendsList from './components/TrendsList';
import { BlogProvider } from './shared/BlogContext';
import { useState } from 'react';
import { Blog } from './types';
import Modal from './components/Modal';
import BlogForm from './components/BlogForm';

function App() {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

	const openModalForNewBlog = () => {
		setEditingBlog(null);
		setIsModalOpen(true);
	};

	const openModalForEdit = () => {
		setEditingBlog(null);
		setIsModalOpen(true);
	};
	return (
		<div>
			<BlogProvider>
				<Navigation />
				<div className=" flex justify-center">
					<section className="mx-auto p-6">
						<div>
							<button
								className="ml-28 bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
								onClick={openModalForNewBlog}
							>
								Add New Blog <IoMdAddCircle className="ml-2" />
								{''}
							</button>

							{/* 文章列表组件 */}
							{isModalOpen && (
								<Modal onClose={() => setIsModalOpen(false)}>
									<BlogForm />
								</Modal>
							)}
						</div>
					</section>

					<div className="w-[30%]">
						<PeopleToFollow />
						<TrendsList />
						<TopicsList />
					</div>
				</div>
			</BlogProvider>
		</div>
	);
}

export default App;
