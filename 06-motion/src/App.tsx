import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ScrollIndicator from './components/ScrollIndicator';
import Layout from './Layouts/layout';
import Loader from './components/Loader';
import DraggableCard from './components/DraggableCard';
import Carousel from './components/Carousel';
import Sidebar from './components/Sidebar';
import ScrollCarousel from './components/ScrollCarousel';
import StickyNav from './components/StickyNav';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/scroll-indicator',
				element: <ScrollIndicator />
			},
			{
				path: '/loader',
				element: <Loader />
			},
			{
				path: '/drag-card',
				element: <DraggableCard />
			},
			{
				path: '/carousel',
				element: <Carousel />
			},
			{
				path: '/sidebar',
				element: <Sidebar />
			},
			{
				path: '/scroll-carousel',
				element: <ScrollCarousel />
			},
			{
				path: '/sticky-nav',
				element: <StickyNav />
			}
		]
	}
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
