import { Outlet, useLocation, Navigate } from "react-router-dom";
import { auth } from "../config/firebase";

const PrivateRoute = () => {
  const location = useLocation();

  return auth.currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
