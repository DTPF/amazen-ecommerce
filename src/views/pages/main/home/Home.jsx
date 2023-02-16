import React, { Suspense, lazy } from "react";
import './Home.scss';
import HelmetSEO from "../../../utils/helmetSEO/HelmetSEO";
const Sections = lazy(() => import('../../../components/main/desktop/home/sections'))

export default function Home(props) {
  return (
    <HelmetSEO title={'Amazen | Home'}>
      <Suspense fallback={<></>}>
        <div className="home">
          <Sections />
        </div>
      </Suspense>
    </HelmetSEO>
  );
}