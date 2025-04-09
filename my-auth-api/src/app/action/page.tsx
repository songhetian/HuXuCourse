'use client';
import { useActionState } from 'react';

const inc = async (prev: number, formData: FormData) => {
	return prev + 1;
};

const Page = () => {
	const [state, formAction, isPending] = useActionState(inc, 0);
	return (
		<div>
			<form>{state}</form>
			<button formAction={formAction}>
				{isPending ? 'loading...' : '提交'}
			</button>
		</div>
	);
};

export default Page;
