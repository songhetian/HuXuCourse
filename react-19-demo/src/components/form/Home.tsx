// route('/projects/:projectId', './project.tsx')
import { Form } from 'react-router-dom';

export async function action({ request }: any) {
	const formData = await request.formData();
	console.log(formData.get('title'));
}

export default function Home() {
	return (
		<div>
			<h1>Project</h1>
			<Form method="post">
				<input type="text" name="title" />
				<button type="submit">Submit</button>
			</Form>
		</div>
	);
}
