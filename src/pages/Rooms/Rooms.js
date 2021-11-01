import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import Room from '../../components/Rooms/Rooms';

export default function Rooms() {

  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <Room />
    </React.Fragment>
  );
}
