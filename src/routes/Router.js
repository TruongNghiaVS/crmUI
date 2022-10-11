import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/layout/Layout';

function Router() {
  return (
    <Routes>
          <Route path="/" element={<Layout page="login" />} />
          <Route path="login" element={<Layout page="login" />} />
          <Route path="home" element={<Layout page="home" />} />
          <Route path="user" element={<Layout page="user" />} />
          <Route path="dashboard" element={<Layout page="dashboard" />} />
          <Route path="follow-up" element={<Layout page="follow-up" />}>
              <Route path=":detail" element={<Layout page="follow-up" />} />
          </Route>
          <Route path="reason" element={<Layout page="reason" />}>
             <Route path=":detail" element={<Layout page="reason" />} />
          </Route>
          <Route path="groupReason" element={<Layout page="groupReason" />}>
              <Route path=":detail" element={<Layout page="groupReason" />} />
          </Route>
    </Routes>
  );
}

export default Router;