import React, { Suspense, lazy } from "react";
import './Home.scss';
const Sections = lazy(() => import('../../../components/main/desktop/home/sections'))

export default function Home(props) {
  return (
    <div className="home">
      <Suspense fallback={<></>}>
        <Sections />
      </Suspense>
    </div>
  );
}