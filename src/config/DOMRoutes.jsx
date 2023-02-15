import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from './routes.js'

export function DOMRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={<route.component routes={route.routes} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export function DOMSubRoutes({ routes }) {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          exact={route.exact}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  )
}