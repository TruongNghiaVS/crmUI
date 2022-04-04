import { useRoutes } from 'react-router-dom';
import Layout from '../pages/layout/Layout';

function Router() {
  return (
    useRoutes([
      { path: "/", element: <Layout page="/" /> },
      {
        path: "/login",
        element: <Layout page="login" />,
        children: [],
      },
      {
        path: "/home",
        element: <Layout page="home" />,
        children: [],
      },
    ])
  );
}

export default Router;