import Link from 'next/link';

const page = () => {
	return (
		<div>
			<h1>TeamMembers</h1>
			<Link href="/members/salaries">Check Out My Salaries</Link>
		</div>
	);
};

export default page;
