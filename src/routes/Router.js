import { useRoutes } from 'react-router-dom';
import Login from '../pages/login/Login';
import Home from '../pages/home/Home';

function Router() {
  return (
    useRoutes([
      { path: "/", element: <Login /> },
      {
        path: "/login",
        element: <Login />,
        children: [],
      },
      {
        path: "/home",
        element: <Home />,
        children: [],
      },
    ])
  );
}

export default Router;