import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

import Contact from 'assets/images/contact.svg';  

const Contactpage = () => {
  return (
    <Layout pageName="contact">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Container>
        <div className="wrapper">

          <img className="hello" src={Contact} alt="Contact" />

          <div className="contact">
            
              <h1>Got a project? Employment opportunity? Need someone to vent to? Coffee? Contact me!</h1>
            
            
            

            <form>
              <label for="name">Name</label>
              <input type="text" id="name" />

              <label for="email">Email</label>
              <input type="text" id="email"></input>

              <label for="message">Message</label>
              <textarea></textarea>

              <a href="mailto:imnickzart@gmail.com"><button>Send Email</button></a>
            </form>

          </div>
          
        </div>
      </Container>
    </Layout>
  );
};

export default Contactpage;