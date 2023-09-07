import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import Products from './pages/Products';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {path: '/', element: <HomePage /> },
      {path: '/products', element: <Products /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
