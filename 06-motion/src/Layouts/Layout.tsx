import { Link, Outlet } from 'react-router-dom';
import { navList } from '../utils/nav';

const Layout = () => {
	return (
		<div className="flex justify-between gap-10">
			<ul className="w-[25%] mt-20 flex flex-col gap-10 items-center ">
				{navList.map((nav, index) => (
					<li key={index} className="w-full">
						<Link
							to={nav.path}
							className="w-full block px-4 py-2  text-white bg-blue-400 rounded-2xl shadow-xl hover:bg-blue-700 transition duration-300 "
						>
							<p className="text-center">{nav.title}</p>
						</Link>
					</li>
				))}
			</ul>

			<section className="w-[68%]">
				<Outlet />
			</section>
		</div>
	);
};

export default Layout;
