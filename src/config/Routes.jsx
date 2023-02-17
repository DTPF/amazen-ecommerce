import React from 'react';
import { BrowserRouter, Routes as DOMRoutes, Route } from "react-router-dom";
import routes from './routes.js'

export function Routes() {
  return (
    <BrowserRouter>
      <DOMRoutes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={<route.component routes={route.routes} />}
          />
        ))}
      </DOMRoutes>
    </BrowserRouter>
  )
}

export function SubRoutes({ routes }) {
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