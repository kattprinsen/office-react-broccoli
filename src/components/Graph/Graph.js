import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
  {
    name:'Page A',
    uv: 400,
    pv: 2400,
    amt: 2400
  },
  {
    name:'Page B',
    uv: 300,
    pv: 2400,
    amt: 2400
  },
  {
    name:'Page C',
    uv: 200,
    pv: 2400,
    amt: 2400
  },
  {
    name:'Page D',
    uv: 330,
    pv: 2400,
    amt: 2400
  }
]

export default function Graph() {

  return (
    <div className="graph-container">
      <div className="recharts-container">
        <h4> Recharts </h4>
          <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0}}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis datakey="name" />
            <YAxis />
          </LineChart>
      </div>
    </div>
  );
}
