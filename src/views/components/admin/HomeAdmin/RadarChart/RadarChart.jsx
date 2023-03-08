import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

export default function RadarChart() {
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  const dataRadar = {
    labels: ['Alimentación', 'Apps y juegos', 'Coche y moto', 'Electrónica', 'Hogar y cocina', 'Libros'],
    datasets: [
      {
        label: 'Gastos',
        data: [1200, 750, 1570, 470, 750, 1050],
        backgroundColor: '#B1270420',
        borderColor: '#B12704',
        borderWidth: 1,
      },
      {
        label: 'Ingresos',
        data: [1220, 868, 1758, 904, 554, 1976],
        backgroundColor: 'rgba(0, 121, 0, 0.2)',
        borderColor: 'rgb(0, 121, 0)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div align={'center'}>
      <h4>Rentabilidad</h4>
      <Radar data={dataRadar} />
    </div>
  )
}