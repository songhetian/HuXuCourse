import { ChangeEvent, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { BiSort } from 'react-icons/bi';
import { MdSort } from 'react-icons/md';
import { AiOutlineDown } from 'react-icons/ai';
import { data } from '../utils/data';
import { DiVim } from 'react-icons/di';

type dataProps = {
	client: string;
	country: string;
	email: string;
	project: string;
	progress: string;
	status: string;
	date: string;
	image: string;
};

const ProjectTable = () => {
	const [projects, setProjects] = useState(data);
	const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
	const [sortConfig, setSortConfig] = useState<{
		key: string;
		direction: string;
	} | null>(null);

	const [filterVisible, setFilterVisible] = useState<boolean>(false);
	const [searchQuery, setSearchQuery] = useState('');

	const [filters, setFilters] = useState({
		name: '',
		country: '',
		email: '',
		project: '',
		status: ''
	});

	const sortProjects = (key: string) => {
		let sortedProjects = [...projects];

		if (
			sortConfig &&
			sortConfig.key === key &&
			sortConfig.direction === 'ascending'
		) {
			sortedProjects.sort((a, b) => (a[key] > b[key] ? -1 : 1));
			setSortConfig({ key, direction: 'descending' });
		} else {
			sortedProjects.sort((a, b) => (a[key] > b[key] ? 1 : -1));
			setSortConfig({ key, direction: 'ascending' });
		}
		setProjects(sortedProjects);
	};

	const handleSortOptionClick = (key: string) => {
		sortProjects(key);
		setDropdownVisible(false);
	};

	// filter

	const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFilters({
			...filters,
			[e.target.name]: e.target.value
		});
	};

	const filteredProjects = projects.filter(
		project =>
			(searchQuery === '' ||
				Object.values(project).some(value =>
					value.toLowerCase().includes(searchQuery.toLowerCase())
				)) &&
			(filters.name === '' ||
				project.client.toLowerCase().includes(filters.name.toLowerCase())) &&
			(filters.country === '' ||
				project.country
					.toLowerCase()
					.includes(filters.country.toLowerCase())) &&
			(filters.email === '' ||
				project.email.toLowerCase().includes(filters.email.toLowerCase())) &&
			(filters.project === '' ||
				project.project
					.toLowerCase()
					.includes(filters.project.toLowerCase())) &&
			(filters.status === '' ||
				project.status.toLowerCase().includes(filters.status.toLowerCase()))
	);

	// 分页
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentProjects = filteredProjects.slice(startIndex, itemsPerPage);
	const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

	const handlePageChange = (num: number) => setCurrentPage(num);

	return (
		<div className="p-4 w-[93%] ml-[5rem]">
			{/* Sorting */}
			<div className="flex items-center mb-5">
				<div className="relative">
					<button
						onClick={() => setDropdownVisible(() => !dropdownVisible)}
						className="border border-gray-700 flex items-center justify-center text-white p-2 rounded cursor-pointer"
					>
						<BiSort className="mr-[0.3rem]" />
						Sort
						<AiOutlineDown className="ml-2" />
					</button>

					{dropdownVisible && (
						<div className="absolute top-full  left-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg ">
							<button
								onClick={() => handleSortOptionClick('client')}
								className="block px-4 py-2 text-white w-full hover:bg-gray-700"
							>
								Name
							</button>
							<button
								onClick={() => handleSortOptionClick('country')}
								className="block px-4 py-2 text-white w-full hover:bg-gray-700"
							>
								Country
							</button>
							<button
								onClick={() => handleSortOptionClick('date')}
								className="block px-4 py-2 text-white w-full hover:bg-gray-700"
							>
								Date
							</button>
						</div>
					)}
				</div>

				{/* Filters */}
				<div className="relative ml-4 w-full">
					<button
						onClick={() => setFilterVisible(!filterVisible)}
						className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
					>
						<MdSort className="mr-[0.3rem]" />
						Filters
						<AiOutlineDown className="ml-2" />
					</button>

					{filterVisible && (
						<div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg p-4">
							<div className="mb-2">
								<label className="block text-white">Filter By Name</label>
								<input
									type="text"
									name="name"
									className="bg-gray-900 text-white rounded p-2 w-full"
									value={filters?.name}
									onChange={handleFilterChange}
								/>
							</div>
							<div className="mb-2">
								<label className="block text-white">Filter By Country</label>
								<input
									type="text"
									name="country"
									className="bg-gray-900 text-white rounded p-2 w-full"
									value={filters?.country}
									onChange={handleFilterChange}
								/>
							</div>
							<div className="mb-2">
								<label className="block text-white">Filter By Email</label>
								<input
									type="text"
									name="email"
									className="bg-gray-900 text-white rounded p-2 w-full"
									value={filters?.email}
									onChange={handleFilterChange}
								/>
							</div>
							<div className="mb-2">
								<label className="block text-white">Filter By Project</label>
								<input
									type="text"
									name="project"
									className="bg-gray-900 text-white rounded p-2 w-full"
									value={filters?.project}
									onChange={handleFilterChange}
								/>
							</div>
							<div className="mb-2">
								<label className="block text-white">Filter By Status</label>
								<input
									type="text"
									name="status"
									className="bg-gray-900 text-white rounded p-2 w-full"
									value={filters?.status}
									onChange={handleFilterChange}
								/>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Main Table */}
			<table className="min-w-full table-auto rounded border border-gray-700 text-white">
				<thead>
					<tr>
						<th className="px-5 py-3 text-left">Image</th>
						<th className="px-5 py-3 text-left">Name</th>
						<th className="px-5 py-3 text-left">Country</th>
						<th className="px-5 py-3 text-left">Email</th>
						<th className="px-5 py-3 text-left">Project Name</th>
						<th className="px-5 py-3 text-left">Task Progress</th>
						<th className="px-5 py-3 text-left">Status</th>
						<th className="px-5 py-3 text-left">Date</th>
						<th className="px-5 py-3 text-left">Actions</th>
					</tr>
				</thead>
				<tbody>
					{currentProjects.map((project, index) => (
						<tr key={index} className="border border-gray-700">
							<td className="px-4 py-2">
								<img
									src={project.image}
									alt={project.client}
									className="w-[3rem] h-[3rem] object-cover rounded-full"
								/>
							</td>
							<td className="px-4 py-2">{project.client}</td>
							<td className="px-4 py-2">{project.country}</td>
							<td className="px-4 py-2">{project.email}</td>
							<td className="px-4 py-2">{project.project}</td>

							<td className="px-4 py-2 w-40">
								<div className="w-24 h2 bg-gray-700 rounded">
									<div className="h-2 bg-green-500 rounded"></div>
								</div>
							</td>
							<td className="px-4 py-2 w-40">
								<span>{project.status}</span>
							</td>
							<td className="px-2 py-2">{project.date}</td>
							<td className="px-4 py-2">
								<div className="relative">
									<BsThreeDots className="cursor-pointer" />
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* Pagination */}
			<div className="flex justify-end mt-4">
				<button
					disabled={currentPage === 1}
					onClick={() => handlePageChange(currentPage - 1)}
					className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50 disabled:bg-yellow-300 cursor-pointer"
				>
					Previous
				</button>
				<span className="px-4 py-2 text-white">
					{currentPage}/{totalPages}
				</span>
				<button
					disabled={currentPage === totalPages}
					onClick={() => handlePageChange(currentPage + 1)}
					className="px-4 py-2 bg-gray-700 text-white rounded ml-2 disabled:opacity-50 cursor-pointer"
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default ProjectTable;
