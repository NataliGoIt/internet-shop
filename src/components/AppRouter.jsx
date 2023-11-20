import React from "react";
import { authRouth, publicRouth } from "../routes";
import { Navigate, Route, Routes } from "react-router-dom";
const AppRouter = () => {
  const isAuth = false;
  return (
    <Routes>
      {isAuth &&
        authRouth.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      {publicRouth.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<Navigate to="/shop" />} />
    </Routes>
  );
};
export default AppRouter;
