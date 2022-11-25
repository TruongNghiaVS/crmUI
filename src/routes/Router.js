import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/layout/Layout';

function Router() {
    return (
          <Routes>
                        <Route path="/" element={<Layout page="login" />} />
                         <Route path="test-line" element={<Layout page="test-line" />}>
                                <Route path=":detail" element={<Layout page="test-line" />} />
                         </Route>
                         <Route path="login" element={<Layout page="login" />} />
                         <Route path="home" element={<Layout page="home" />} />
                         <Route path="user" element={<Layout page="user" />} />
                         <Route path="dashboard" element={<Layout page="dashboard" />} />
                         <Route path="campaignAssign" element={<Layout page="campaignAssign" />}>
                              <Route path=":id" element={<Layout page="campaignAssign" />} />
                         </Route>
                         <Route path="follow-up-new"  element={<Layout page="follow-up-new" />}>
                         <Route path=":detail" element={<Layout page="follow-up-new" />} />
                         
                         </Route>
                         <Route path="follow-up" element={<Layout page="follow-up" />}>
                              <Route path=":detail" element={<Layout page="follow-up" />} />
                         </Route>
                         <Route path="reason" element={<Layout page="reason" />}>
                              <Route path=":detail" element={<Layout page="reason" />} />
                         </Route>
                         <Route path="groupReason" element={<Layout page="groupReason" />}>
                              <Route path=":detail" element={<Layout page="groupReason" />} />
                         </Route>
                         <Route path="campangn" element={<Layout page="campangn" />}>
                              <Route path=":edit" element={<Layout page="campangn" />} />
                         </Route>
                         <Route path="report" element={<Layout page="reportMaster" />}>
                              <Route path=":reportId" element={<Layout page="reportMaster" />} />
                         </Route>
                         <Route path="historical" element={<Layout page="reporthistorical" />}>
                       
                         </Route>
                         <Route path="masterData" element={<Layout page="relationship" />}>
                              <Route path=":edit" element={<Layout page="relationship" />} />
                         </Route>
          </Routes>
     );
}

export default Router;