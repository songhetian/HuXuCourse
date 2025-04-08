import { ReactNode } from 'react';

type LayoutProps = {
	children: ReactNode;
	team: ReactNode;
	comments: ReactNode;
};

const Layout = ({ children, team, comments }: LayoutProps) => {
	return (
		<div className="bg-gray-100 w-full h-screen flex flex-col  items-center justify-between ">
			<div className="card h-1/10 w-full">{children}</div>
			<div className="card h-7/10 w-full">{team}</div>
			<div className="card h-1/10 w-full">{comments}</div>
		</div>
	);
};

export default Layout;
