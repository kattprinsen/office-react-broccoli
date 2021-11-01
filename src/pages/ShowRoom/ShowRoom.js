import React from 'react';

import { Link, useParams } from 'react-router-dom';

import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import Seats from '../../components/Seats/Seats';

export default function ShowRoom() {

  function GetSeats() {
    let { id } = useParams();
    return (<Seats id={id} />);
  }

  return (
    <React.Fragment>
      <Hero hero="showRoomsHero">
        <Banner title="Our beautiful room">
          <Link to="/rooms" className="btn-primary">
            return to rooms
          </Link>
        </Banner>
      </Hero>
      <GetSeats />
    </React.Fragment>
  );
}
