function Items() {
	const posts = Array.from({ length: 100000 }, (_, index) => `Posts ${index}`);

	return (
		<div>
			<ul>
				{posts.map(item => {
					return <li>{item}</li>;
				})}
			</ul>
		</div>
	);
}

export default Items;
