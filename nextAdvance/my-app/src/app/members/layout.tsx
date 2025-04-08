import { ReactNode } from 'react';

type LayoutProps = {
	children: ReactNode;
	team: ReactNode;
	comments: ReactNode;
};

const Layout = ({ children, team, comments }: LayoutProps) => {
	return (
		<div>
			<div>{children}</div>
			<h1>这是第二部分</h1>
			<div className="flex flex-col">
				<div>{team}</div>
				<div>{comments}</div>
			</div>
		</div>
	);
};

export default Layout;
