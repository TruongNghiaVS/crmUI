import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/layout/Layout';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout page="/" />} />
      <Route path="/login" element={<Layout page="/login" />} />
      <Route path="/home" element={<Layout page="home" />} />
      <Route path="/user" element={<Layout page="user" />} />
      <Route path="/dashboard" element={<Layout page="dashboard" />} />
      <Route path="/follow-up" element={<Layout page="follow-up" />}>
        <Route path="/follow-up/:detail" element={<Layout page="follow-up" />} />
        <Route path="/follow-up/:detail" element={<Layout page="follow-up" />} />
        <Route path="/follow-up/:detail" element={<Layout page="follow-up" />} />
      </Route>
  </Routes>
  );
}

export default Router;