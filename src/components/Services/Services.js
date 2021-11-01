import React, { Component } from 'react';
import { FaJediOrder } from 'react-icons/fa';

import Title from '../Title/Title';
import './Services.css';

export default class Services extends Component {
  state = {
    services : [
      {
        icon: <FaJediOrder />,
        title: 'Great Coffeé whatehell.',
        info: 'We have great Coffeé on the office'
      },
      {
        icon: <FaJediOrder />,
        title: 'Hang out with collegaues.',
        info: 'Everyone needs to socialize from time to time'
      },
      {
        icon: <FaJediOrder />,
        title: 'Come and eat amazing food with friends.',
        info: 'Use the great location to always find a great place to get food'
      },
      {
        icon: <FaJediOrder />,
        title: 'Never miss out on some great cerveza.',
        info: 'Never miss out on an afterwork'
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
