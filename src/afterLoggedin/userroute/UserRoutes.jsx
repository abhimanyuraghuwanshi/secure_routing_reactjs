
import React,  {Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from '../commanComponents/usernavbar';
import '../commanComponents/componentCSS/usernavbar.css';

import PageNotFound from '../../generalPages/Pagenotfound';
import Dashboard from '../userProfile/Dashboard';
const ProfileRoutes = React.lazy(() => import('../userroute/ProfileRoutes'));
const TutorialRoute = React.lazy(() => import('../userroute/TutorialRoutes'));




const UserRoutes = () => {
  return (<>
    <Navbar />
    <div style={{ paddingTop: '70px' }} >

      <section>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path={`tutorial/*`} element={<Suspense fallback={<div>Loading...</div>}> <TutorialRoute /> </Suspense> } />
          <Route path={`profile/*`} element={ <Suspense fallback={<div>Loading...</div>}>  <ProfileRoutes /> </Suspense>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </section>
    </div>
  </>
  );
};

export default UserRoutes;
