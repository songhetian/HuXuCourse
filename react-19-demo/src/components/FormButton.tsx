import { useFormStatus } from 'react-dom';

function FormButton() {
	const form = useFormStatus();
	console.log(form);

	return (
		<div>
			<button className="border border-blue-300 bg-red-400 text-white p-2 rounded-xl shadow-lg hover:translate-x-2 transition-all duration-300 ease-in-out">
				提交
			</button>
		</div>
	);
}

export default FormButton;
