import { useActionState } from 'react';

// interface incrementProps {
// 	prev: number;
// 	formData: FormData;
// }

// type ActionType = (x: number, y: any) => number;

function increment(prev: number, fromData: any): number {
	console.log(fromData.get('name'), prev);
	return prev + 1;
}
function Count() {
	const [state, formAction] = useActionState(increment, 0);
	return (
		<form>
			<h1>{state}</h1>
			<button formAction={formAction} className="bg-blue-400 p-2 rounded-xl">
				增量
			</button>
			<br />
			<input type="text" name="name" className="border-2 " />
		</form>
	);
}

export default Count;
