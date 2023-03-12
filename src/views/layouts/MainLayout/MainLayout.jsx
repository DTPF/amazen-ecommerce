import React from "react";
import { Outlet } from "react-router-dom";
import useWindowSizeReport from "../../../hooks/useWindowSizeReport";
import { responsiveBreak } from "../../utils/componentsConstants";
import './MainLayout.scss';
// Desktop
import HeaderMainDesktop from '../../components/main/desktop/layout/HeaderMain';
import FooterMainDesktop from '../../components/main/desktop/layout/FooterMain';
import MenuMain from '../../components/main/desktop/layout/MenuMain';
//Mobile
import HeaderMainMobile from '../../components/main/mobile/layout/HeaderMainMobile';
import FooterMainMobile from '../../components/main/mobile/layout/FooterMainMobile';
import NavBarMobile from '../../components/main/mobile/layout/NavBarMobile';

export default function MainLayout() {
  const [innerWidth] = useWindowSizeReport();

  return (
    <div className='main-layout'>
        {(innerWidth > responsiveBreak) ? (
          <>
            <HeaderMainDesktop />
            <MenuMain />
          </>
        ) : (
          <>
            <HeaderMainMobile />
            <NavBarMobile />
          </>
        )}

        <div className='main-layout__main'>
          <Outlet />
        </div>

        {(innerWidth > responsiveBreak) ? <FooterMainDesktop /> : <FooterMainMobile />}
    </div>
  );
}