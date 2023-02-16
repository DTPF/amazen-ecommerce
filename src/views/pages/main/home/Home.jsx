import React, { Suspense, lazy } from "react";
import HelmetSEO from "../../../utils/helmetSEO/HelmetSEO";
import './Home.scss';
const Sections = lazy(() => import('../../../components/main/desktop/home/sections'))

export default function Home() {
  return (
    <HelmetSEO title={'Amazén | Home'}>
      <Suspense fallback={<></>}>
        <div className="home">
          <Sections />
        </div>
      </Suspense>
    </HelmetSEO>
  );
}