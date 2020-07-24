import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Herocard from '../components/Herocard';
import Textandhead from '../components/Textandhead';


const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      {/* <Container> */}

      <Textandhead />

        <h1>Gatsby Sass Starter</h1>
        <h4>Gatsby Sass Starter</h4>

      <Container>
        <Herocard />
        <Herocard />
      </Container>  

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac. Et leo duis ut diam quam nulla porttitor massa id. Mi eget mauris pharetra et. Consectetur purus ut faucibus pulvinar. Ut diam quam nulla porttitor massa id neque aliquam. Facilisi cras fermentum odio eu. Libero id faucibus nisl tincidunt eget nullam. Ut aliquam purus sit amet luctus. Gravida dictum fusce ut placerat orci nulla pellentesque. Laoreet id donec ultrices tincidunt arcu non sodales. Pretium viverra suspendisse potenti nullam. Mattis aliquam faucibus purus in massa tempor nec. Ultrices sagittis orci a scelerisque. Tristique nulla aliquet enim tortor at auctor. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Amet est placerat in egestas erat imperdiet.
        </p>

        <h2>Still Getting Started?</h2>

        <p>
        Ut sem viverra aliquet eget sit amet. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Pharetra sit amet aliquam id diam maecenas ultricies mi. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Adipiscing elit ut aliquam purus sit amet. Bibendum est ultricies integer quis auctor. Convallis a cras semper auctor neque. Dui faucibus in ornare quam viverra. Viverra maecenas accumsan lacus vel facilisis. Adipiscing enim eu turpis egestas. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Eget dolor morbi non arcu risus. Sed blandit libero volutpat sed cras ornare arcu dui. Mauris rhoncus aenean vel elit scelerisque.
        </p>

      {/* </Container> */}
    </Layout>
  );
};

export default IndexPage;
