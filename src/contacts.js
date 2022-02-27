import React, { Component } from 'react';
import Iframe from 'react-iframe';
import FormMessage from './FormMessage';


function contacts(props) {


    let title = props.contents.filter(e => e.id === 13)[0]
    if(title) title = title.Content;
  
    let p1 = props.contents.filter(e => e.id === 14)[0]
    if(p1) p1 = p1.Content;
  
    let address_title = props.contents.filter(e => e.id === 15)[0]
    if(address_title) address_title = address_title.Content;
  
    let address_p1 = props.contents.filter(e => e.id === 16)[0]
    if(address_p1) address_p1 = address_p1.Content;
    
    let email_title = props.contents.filter(e => e.id === 17)[0]
    if(email_title) email_title=email_title.Content;
  
    let email_p1 = props.contents.filter(e => e.id === 18)[0]
    if(email_p1) email_p1=email_p1.Content;
  
    let contact_title = props.contents.filter(e => e.id === 19)[0]
    if(contact_title) contact_title=contact_title.Content;
  
    let contact_p1 = props.contents.filter(e => e.id === 20)[0]
    if(contact_p1) contact_p1=contact_p1.Content;
  
    let gmap = props.contents.filter(e => e.id === 26)[0]
    if(gmap) gmap=gmap.Content;

  return(
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <span>{title}</span>
          <h2>{title}</h2>
          <p>{p1}</p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>{address_title}</h3>
              <p>{address_p1}</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope"></i>
              <h3>{email_title}</h3>
              <p>{email_p1}</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>{contact_title}</h3>
              <p>{contact_p1}</p>
            </div>
          </div>

        </div>

        <div className="row" data-aos="fade-up">

          <div className="col-lg-6 ">
            <Iframe className="mb-4 mb-lg-0" src={gmap} frameBorder="0" style="border:0; width: 100%; height: 384px;" allow="fullscreen" width="100%" height="100%"></Iframe>
          </div>

          <FormMessage saveMessages={props.saveMessages}/>

        </div>

      </div>
    </section>

  )

}
  
  export default contacts;