import React from 'react';
import './HomeAdminComponent.scss';
import DoughnutChart from './DoughnutChart';
import RadarChart from './RadarChart'

export default function HomeAdminComponent() {
  return (
    <div className='home-admin-component'>
      <div className='home-admin-component__radar-chart'>
        <RadarChart />
      </div>
      <div className='home-admin-component__doughnut-chart'>
        <DoughnutChart />
      </div>
    </div>
  )
}