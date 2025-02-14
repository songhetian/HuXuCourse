import { FC } from 'react';
import { Blog } from '../types';
import { FaBookmark, FaEdit, FaTrash } from 'react-icons/fa';

interface ArticleCardProps {
	article: Blog;
	onDelete: () => void;
	onEdit: () => void;
}

const ArticleCard: FC<ArticleCardProps> = ({ article, onDelete, onEdit }) => {
	return (
		<div className="flex p-4 bg-white w-160 mb-6 ml-8 shadow-lg shadow-blue-100 rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out">
			<img
				src={article.image}
				alt={article.title}
				className="w-36 h-24 object-cover rounded-lg shadow-lg"
			/>
			<div className="ml-6 flex-1 flex flex-col">
				<h3 className="text-xl font-semibold text-gray-800 mb-2">
					{article.title}
				</h3>
				<p className="text-sm text-gray-700 flex-1">{article.description}</p>
				<div className="flex items-center justify-between mt-4 text-gray-500">
					<span className="text-sm">{article.title}</span>
					<div className="flex space-x-3">
						<FaBookmark className="text-gray-500 hover:text-gray-700 transition-colors duration-300 cursor-pointer" />
						<FaEdit
							onClick={onEdit}
							className="text-blue-500 hover:text-blue-700 transition-colors duration-300 cursor-pointer"
						/>
						<FaTrash
							onClick={onDelete}
							className="transition-colors duration-300 cursor-pointer text-red-500 hover:text-red-700"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
