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
      <img className="hello" src={hello} />

        <h1>Sup Fuckers?</h1>

        <div className="Herogallery">
          <Herocard page="/traveler" imgSrc={nyc} altTag="New Yawk" title="Traveler" desc="App Design" />
          <Herocard page="/" imgSrc={mount} altTag="Mountain" title="Crown Of Red" desc="Branding" />
        </div>

      </Container>  

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac. Et leo duis ut diam quam nulla porttitor massa id. Mi eget mauris pharetra et. Consectetur purus ut faucibus pulvinar. Ut diam quam nulla porttitor massa id neque aliquam. Facilisi cras fermentum odio eu. Libero id faucibus nisl tincidunt eget nullam. Ut aliquam purus sit amet luctus. Gravida dictum fusce ut placerat orci nulla pellentesque. Laoreet id donec ultrices tincidunt arcu non sodales. Pretium viverra suspendisse potenti nullam. Mattis aliquam faucibus purus in massa tempor nec. Ultrices sagittis orci a scelerisque. Tristique nulla aliquet enim tortor at auctor. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Amet est placerat in egestas erat imperdiet.
        </p>

    </Layout>
  );
};

export default IndexPage;
