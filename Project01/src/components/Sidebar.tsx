import { FaHome, FaSearch, FaUser } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
const Sidebar = () => {
	return (
		<aside className="sidebar fixed top-0 left-0 h-screen bg-[#1a1c1e] w-20 text-white">
			<ul className="p-4 flex flex-col justify-between items-center h-full">
				<div className="top flex flex-col gap-4 items-center">
					<li className="mb-2">
						<div className="flex items-center">
							<FaHome className="mr-2 mb-3" size={23} />
						</div>
					</li>
					<li className="mb-2">
						<div className="flex items-center">
							<FaUser className="mr-2 mb-3" size={23} />
						</div>
					</li>
					<li className="mb-2">
						<div className="flex items-center">
							<FaSearch className="mr-2 mb-3" size={23} />
						</div>
					</li>
				</div>

				<div className="bottom">
					<li>
						<IoMdSettings size={23} />
						<FaUser className="mt-5" size={23} />
					</li>
				</div>
			</ul>
		</aside>
	);
};

export default Sidebar;
