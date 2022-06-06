import React, { Component } from 'react';
import Iframe from 'react-iframe';
import FormMessage from './FormMessage';


function contacts(props) {

  return(
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <span>CONTACT</span>
          <h2>CONTACT</h2>
          <p>Reach out for any question</p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>Our Address</h3>
              <p>Suite 2201 Eaton Centre 250 Yonge Street, Toronto Ontario M5B 2L7 Canada</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>clacarli@hotmail.com</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>+39 353 432 8194</p>
            </div>
          </div>

        </div>

        <div className="row" data-aos="fade-up">

          <div className="col-lg-6 ">
            <Iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed/v1/place?q=Suite%202201%2C%20Eaton%20Centre%2C%20250%20Yonge%20Street%20Toronto%2C%20Ontario%2C%20M5B%202L7%2C%20Canada&key=AIzaSyCmrxSvwUDR5KGK0vYq40LFkJ-Au3KZC1U" frameBorder="0" style="border:0; width: 100%; height: 384px;" allow="fullscreen" width="100%" height="100%"></Iframe>
          </div>

          <FormMessage saveMessages={props.saveMessages}/>

        </div>

      </div>
    </section>

  )

}
  
  export default contacts;