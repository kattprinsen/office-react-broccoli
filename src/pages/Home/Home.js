import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import Services from '../../components/Services/Services';

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Kom och boka ditt bord på kontoret"
          subtitle="Kontor mitt i centrala Malmö">
          <Link to="/rooms" className="btn-primary">
            Go to rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </React.Fragment>
  );
}
