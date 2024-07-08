import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const RedirectTo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [navigate]);
};

function ProtectedRoutes() {
  // const authToken = localStorage.getItem("token");
  const authToken = true;

  return authToken ? <Outlet /> : <RedirectTo />;
}

export default ProtectedRoutes;
