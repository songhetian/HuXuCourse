import FormButton from '../FormButton';

function Form() {
	const formAction = async (formData: any) => {
		await new Promise(resolve => setTimeout(resolve, 2000));
		const userData = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password')
		};
		console.log(userData);
	};

	return (
		<form action={formAction}>
			<div>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					className="border border-black m-5 rounded-md"
				/>
			</div>
			<div>
				<label htmlFor="email">email:</label>
				<input
					type="email"
					id="email"
					name="email"
					className="border border-black m-1 rounded-md"
				/>
			</div>
			<div>
				<label htmlFor="password">password:</label>
				<input
					type="password"
					id="password"
					name="password"
					className="border border-black m-5 rounded-md"
				/>
			</div>
			<FormButton />
		</form>
	);
}

export default Form;
