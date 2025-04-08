const Page = ({ params }: { params: { id: string } }) => {
	const { id } = params;
	return <div>Page{id}</div>;
};

export default Page;
