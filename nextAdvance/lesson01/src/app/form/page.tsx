import { useOptimistic } from 'react';

export async function getData(formData: FormData) {
	'use server';
	console.log(formData);
}

const Form = () => {
	// useOptimistic
	return (
		<div>
			<form action={getData}>
				<input type="text" name="list" />
				<button type="submit">提交</button>
			</form>
		</div>
	);
};

export default Form;
