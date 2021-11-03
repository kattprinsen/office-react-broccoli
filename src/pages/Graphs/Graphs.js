import React from 'react';

import Hero from '../../components/Hero/Hero';
import Banner from '../../components/Banner/Banner';
import Graph from '../../components/Graph/Graph';

export default function Graphs() {

  return (
    <React.Fragment>
      <Hero>
        <Banner
        title="Titta på våra fina graphar här"
        subtitle="Statistik statistik och förbannade statistik">
        </Banner>
      </Hero>
      <Graph />
    </React.Fragment>
  );
}
