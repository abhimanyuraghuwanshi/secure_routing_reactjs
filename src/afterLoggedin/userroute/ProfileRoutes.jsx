
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Activities from '../userProfile/Activities'
import ProfileSidebar from '../commanComponents/profilesidebar'
import Mydreams from '../userProfile/myDreams'
import MyReferral from '../userProfile/myReferral'

const ProfileRoutes = () => {
  return (<>
    <ProfileSidebar />
    <section>
      <Routes>
        <Route path={`/`}  >
          <Route index element={<Activities />} />
          <Route path={`dreams`} element={< Mydreams />} />
          <Route path={`myreferral`} element={< MyReferral />} />
        </Route>
      </Routes>
    </section>

  </>
  );
};

export default ProfileRoutes;
