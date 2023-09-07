import { createBrowserRouter, RouterProvider } from 'react-ruter-dom';
import HomePage from './pages/Home';

const router = createBrowserRouter([
  {path: '/', element: <HomePage /> },
  {}
]);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
