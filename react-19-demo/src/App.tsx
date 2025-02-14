import { Suspense } from 'react';
import Theme from './components/Theme.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Context from './components/Context.tsx';
import ForWard from './components/context/ForWard.tsx';
import Form from './components/context/Form.tsx';
import Home from './components/form/Home.tsx';
import Count from './components/useActionState/Count.tsx';
import UserHome from './components/useTransition/Home.tsx';

const App = () => {
	return (
		<>
			<Suspense fallback={<h2>Loading...</h2>}>
				<BrowserRouter>
					<Routes>
						<Route element={<Theme />} path="/theme" />
						<Route element={<Context />} path="/context" />
						<Route element={<ForWard />} path="/for-ward" />
						<Route element={<Form />} path="/form" />
						<Route element={<Home />} path="/home" />
						<Route element={<Count />} path="/count" />
						<Route path="/user">
							<Route element={<UserHome />} path="home" />
						</Route>
					</Routes>
				</BrowserRouter>
			</Suspense>
		</>
	);
};

export default App;
