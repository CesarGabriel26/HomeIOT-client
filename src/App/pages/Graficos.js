// src/pages/Home.js
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { time: '00:00', temperature: 24.11 },
  { time: '01:00', temperature: 14.83 },
  { time: '02:00', temperature: 20.04 },
  { time: '03:00', temperature: 24.98 },
  { time: '04:00', temperature: 18.66 },
  { time: '05:00', temperature: 23.34 },
  { time: '06:00', temperature: 24.75 },
  { time: '07:00', temperature: 18.22 },
  { time: '08:00', temperature: 29.16 },
  { time: '09:00', temperature: 15.73 },
  { time: '10:00', temperature: 26.72 },
  { time: '11:00', temperature: 14.81 },
  { time: '12:00', temperature: 26.69 },
  { time: '13:00', temperature: 30.12 },
  { time: '14:00', temperature: 19.89 },
  { time: '15:00', temperature: 34.87 },
  { time: '16:00', temperature: 26.51 },
  { time: '17:00', temperature: 22.58 },
  { time: '18:00', temperature: 22.84 },
  { time: '19:00', temperature: 29.42 },
  { time: '20:00', temperature: 25.72 },
  { time: '21:00', temperature: 30.99 },
  { time: '22:00', temperature: 25.53 },
  { time: '23:00', temperature: 34.62 }
];

const TemperatureLineChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="20 20" />

      <XAxis dataKey="time" />
      <YAxis />

      <Tooltip />
      <Legend />

      <Line type="monotone" dataKey="temperature" stroke="orange" />
    </LineChart>
  </ResponsiveContainer>
);

function Graphs() {
  return (
    <div>
      <TemperatureLineChart />
    </div>
  );
}

export default Graphs;
