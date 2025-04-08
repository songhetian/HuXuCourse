import { ReactNode } from 'react';

type LayoutType = {
	children: ReactNode;
	info: ReactNode;
};

const Layout = ({ children, info }: LayoutType) => {
	return (
		<div>
			<h1>1234</h1>
			{info}
			{children}
		</div>
	);
};

export default Layout;
