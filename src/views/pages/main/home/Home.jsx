import React from "react";
import HelmetSEO from "../../../utils/helmetSEO/HelmetSEO";
import Sections from '../../../components/main/desktop/home/sections';
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