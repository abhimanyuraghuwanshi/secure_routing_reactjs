
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import TutorialDashboard from '../tutorialPages/tutorialDashboard';
import Tutorial1 from '../tutorialPages/tutorial1';
import Tutorial2 from '../tutorialPages/tutorial2';
import TutorialSidebar from '../commanComponents/tutorialsidebar'


const UserRoutes = () => {
  return (<>
  <TutorialSidebar />
    <section>
      <Routes>
        <Route path={`/`}  >
        <Route index element={<TutorialDashboard />} />
        <Route path={`tut1`} element={<Tutorial1 />} />
        <Route path={`tut2`} element={<Tutorial2 />} />
        </Route>
      </Routes>
    </section>

  </>
  );
};

export default UserRoutes;
