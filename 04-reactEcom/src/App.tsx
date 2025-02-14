// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { FilterProvider } from './components/FilterContext';
import MainContent from './components/MainContent';
import ProductPage from './components/ProductPage';
import TopSellers from './components/TopSellers';
import PopularBlogs from './components/PopularBlogs';

// const router = createBrowserRouter([
// 	{
// 		path: '/home',
// 		element: <Sidebar />
// 		// children: {}
// 	}
// ]);

const App = () => {
	// return <RouterProvider router={router} />;
	return (
		<FilterProvider>
			<BrowserRouter>
				<div className="flex h-screen">
					<Sidebar />
					<div className="rounded w-full flex justify-between flex-wrap">
						<Routes>
							<Route path="/" element={<MainContent />} />
							<Route path="/product/:id" element={<ProductPage />} />
						</Routes>
						<div>
							<TopSellers />
							<PopularBlogs />
						</div>
					</div>
				</div>
			</BrowserRouter>
		</FilterProvider>
	);
};

export default App;
