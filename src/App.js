import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {Suspense} from 'react';
import './App.css';
import config from './config'
import PageNotFound from './generalPages/Pagenotfound';
import Home from './generalPages/Home';
import About from './generalPages/About';
import UserLogin from './generalPages/Userlogin';
const UserRoutes = React.lazy(() => import('./afterLoggedin/userroute/UserRoutes'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`${config.baseurl}`} element={<Home />} />
          <Route path={`${config.baseurl}about`} element={<About />} />
          <Route path={`${config.baseurl}login`} element={<UserLogin />} />
          
          <Route path={`${config.baseurl}${config.loginurl}/*`} element={<Suspense fallback={<div>Loading...</div>}> <UserRoutes /> </Suspense> } />
          
          <Route path={`/*`} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
