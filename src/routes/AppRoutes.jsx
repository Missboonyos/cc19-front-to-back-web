//rfce
import React from 'react'
import { Outlet, Route, Routes } from 'react-router';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import About from "../pages/About";
import Register from '../pages/auth/Register';
import Login from '../pages/auth/Login';
import User from '../pages/user/User';
import Dashboard from '../pages/admin/Dashboard';
import Manage from '../pages/admin/Manage';
import Register1 from '../pages/auth/Register1';


function AppRoutes() {
  return (<>
  <Routes>
    {/* Public */}
    <Route path="/" element={ <Layout></Layout> }>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register1 />} />
        <Route path="login" element={<Login />} />
    </Route>

    {/* Private [USER] */}
    <Route path="user">
        <Route index element={<User />} />
    </Route>

    {/* Private [ADMIN] */}
    <Route path="admin">
        <Route index element={<Dashboard />} />
        <Route path="manage" element={<Manage />} />
    </Route>


    <Route path="*" element={<h1>404 Not Found</h1>} />
  </Routes>
  </>
  );
}


export default AppRoutes