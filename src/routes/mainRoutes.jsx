import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home/Home';
import Main from '../layout/Main/Main';

const routes = createBrowserRouter([
	// This is the root layout with Navbar component
	{
		path: '/',
		element: <App />,
		children: [
			// This layout is for all the pages with Footer component
			{
				path: '/',
				element: <Main />,
				children: [
					{
						path: '/',
						element: <Home />,
					},
				],
			},
		],
	},
]);

export default routes;
