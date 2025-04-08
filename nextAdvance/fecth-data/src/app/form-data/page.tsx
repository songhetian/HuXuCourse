const FormData = async ({
	searchParams
}: {
	searchParams: { input: string };
}) => {
	const { input } = await searchParams;
	return (
		<div>
			{input && <h1>{input}</h1>}
			<form>
				<input type="text" name="input" className="ring-1 ring-blue-400" />
				<button>Add Todo</button>
			</form>
		</div>
	);
};

export default FormData;
