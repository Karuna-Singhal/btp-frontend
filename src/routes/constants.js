import { Navigate } from "react-router-dom";

import Login from "../pages/auth/login/Login";
import Profile from "pages/studentProfile/Profile";
import AdminDashBoard from "pages/adminDashboard/AdminDashBoard";

export const authRoutes = [
  {
    path: "/",
    component: <Navigate to="/login" />,
    title: "Redirect",
  },
  {
    path: "/login",
    component: <Login />,
    title: "Login",
  },
];

export const protectedRoutes = [
  {
    path: "/my-profile",
    component: <Profile />,
    title: "My Profile",
  },
  {
    path: "/admin-dashboard",
    component: <AdminDashBoard />,
    title: "Admin Dashboard",
  },
];
