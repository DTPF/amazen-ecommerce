import React from "react";
import HelmetSEO from "../../../utils/HelmetSEO/HelmetSEO";
import Sections from '../../../components/main/Sections';
import './home.scss';

export default function Home() {
  return (
    <HelmetSEO title={'Amazén | Home'}>
      <div className="home">
        <Sections />
      </div>
    </HelmetSEO>
  );
}