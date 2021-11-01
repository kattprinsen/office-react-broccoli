import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Seats.css';

export default function Seats({ id }) {

  const [data, setData] = useState(null);

  useEffect(async() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8080/seats/'
      );
      setData({ hits:result.data });
    }
    fetchData();
  }, []);

  console.log('data', data);

  return (
    <div className="seats-container">
      Fyfan här ska vi rita platser {id}
      <ul className="seats-list">
        {data && data.hits.map(item => (
          <li key={item.seatId} className={`seat ${item && `${item.type.name.toLowerCase()}`}`}>
            {item.seatId}
          </li>
        ))}
      </ul>
    </div>
  );
}
