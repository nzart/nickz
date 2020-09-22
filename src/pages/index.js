import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Herocard from '../components/Herocard';

import mount from 'assets/images/mountain.jpg';
import hello from 'assets/images/hello.svg';
import travelhome from 'assets/images/homepage/travelerredux.png';
import templehome from 'assets/images/homepage/temple.png';
import corhome from 'assets/images/homepage/corthumb.png';


const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Container>
        <div className="wrapper">
        
          <img className="hello" src={hello} alt="hello" />

            <h1>I'm Nick Zart. <br/>I'm a Visual Designer & UI Developer.</h1>

            <div className="Herogallery">
              <Herocard page="/traveler" imgSrc={travelhome} altTag="Traveler App" title="Traveler" desc="App Design" />
              <Herocard page="/" imgSrc={templehome} altTag="Temple" title="Temple" desc="Branding" />
              <Herocard page="/crownofred" imgSrc={corhome} altTag="Crown of Red" title="Crown Of Red" desc="Branding" />
              <Herocard page="/" imgSrc={mount} altTag="Mountain" title="Fitness" desc="App Design" />
              <Herocard page="/" imgSrc={mount} altTag="Mountain" title="About" desc="My Life" />
              <Herocard page="/" imgSrc={mount} altTag="Mountain" title="Contact" desc="Slide in the DMs" />
            </div>


        </div>
      </Container>  


    </Layout>
  );
};

export default IndexPage;
