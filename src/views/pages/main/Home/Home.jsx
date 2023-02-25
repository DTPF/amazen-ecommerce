import React from "react";
import HelmetSEO from "../../../utils/HelmetSEO/HelmetSEO";
import Sections from '../../../components/main/desktop/Sections';
import './Home.scss';

export default function Home() {
  return (
    <HelmetSEO title={'Amazén | Home'}>
      <div className="home">
        <Sections />
      </div>
    </HelmetSEO>
  );
}