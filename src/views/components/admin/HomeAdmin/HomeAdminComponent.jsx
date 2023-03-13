import React from 'react';
import DoughnutChart from './DoughnutChart';
import RadarChart from './RadarChart'
import './homeAdminComponent.scss';

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