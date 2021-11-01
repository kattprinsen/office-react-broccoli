import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Title from '../Title/Title';
import './Rooms.css';

export default class Rooms extends Component {
  state = {
    rooms: [
      {
        id: 1,
        name: 'HR-Rummet',
        seats: 2
      },
      {
        id: 2,
        name: 'Rum 0301',
        seats: 9
      },
      {
        id: 3,
        name: 'Peters Rum',
        seats: 1
      }
    ]
  };

  render() {
    return (
      <section className="rooms">
          <Title title="Rooms" />
        <div className="rooms-center">
          {this.state.rooms.map((item, index) => {
            return (
              <article key={index} className="room">
                  <Link to={`/rooms/${item.id}`}>
                    <h3>{item.name}</h3>
                  </Link>
                <p>Platser: {item.seats}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
