import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Textandhead from '../components/Textandhead';

const TravelerPage = () => {
  return (
    <Layout pageName="traveler">
      <Helmet>
        <title>Traveler</title>
      </Helmet>
      <Container>

      <h1>Traveler</h1>
      <h3>App Design</h3>

      <Textandhead head="Initial Wireframe" para="The first idea was to have users choose a city, select a few interests and have the app create a custom itinerary. While designing the wireframes the app seemed to lack any substance. While it would be a custom itinerary, there was not much room for the users to grow. They would be relying on an app too much and wouldn't have an opportunity to change how they travel. Like travel, technology should help us grow." />

      </Container>
    </Layout>
  );
};

export default TravelerPage;