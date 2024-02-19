import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import { homeLoader } from './pages/Home/loader';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <NotFound />,
		loader: homeLoader,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
