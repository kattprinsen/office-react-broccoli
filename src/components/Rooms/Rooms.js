import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import Title from '../Title/Title';
import './Rooms.css';

export default function Rooms() {

  const [data, setData] = useState(null);

  useEffect(async() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8080/rooms/'
      );
      setData({ hits:result.data });
    }
    fetchData();
  }, []);

  console.log('rooms', data);

  return (
    <section className="rooms">
      <Title title="Rooms" />
      <div className="rooms-center">
        {data && data.hits.map(item => (
          <article key={item.id} className="room">
            <Link to={`/rooms/${item.id}`}>
              <h3> Rum: {item.name} </h3>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
