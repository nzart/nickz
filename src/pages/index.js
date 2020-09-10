import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Herocard from '../components/Herocard';

import nyc from 'assets/images/bkbridge.jpg'; 
import mount from 'assets/images/mountain.jpg';
import hello from 'assets/images/hello.svg'


const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Container>
        <div className="wrapper">
        
          <img className="hello" src={hello} alt="hello" />

            <h1>I'm Nick Zart. <br/>I'm a UI Designer & Developer.</h1>

            <div className="Herogallery">
              <Herocard page="/traveler" imgSrc={nyc} altTag="New Yawk" title="Traveler" desc="App Design" />
              <Herocard page="/" imgSrc={mount} altTag="Mountain" title="Temple" desc="Branding" />
              <Herocard page="/" imgSrc={mount} altTag="Mountain" title="Crown Of Red" desc="Branding" />
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
