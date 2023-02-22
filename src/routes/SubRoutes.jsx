import React from 'react';
import { Routes as DOMRoutes, Route } from "react-router-dom";

export default function SubRoutes({ routes }) {
  return (
    <DOMRoutes>
      {routes.map((route, index) => (
        <Route
          key={index}
          exact={route.exact}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </DOMRoutes>
  )
}