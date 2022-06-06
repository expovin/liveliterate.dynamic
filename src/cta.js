import React, { Component } from 'react';



function cta (props){

  return(
    <section id="cta" className="cta" style={{backgroundImage: 'url(https://s3.eu-central-1.amazonaws.com/liveliterate.com/362c66583a7e35c2464efbf93b373f89.jpeg)'}}>
      <div className="container" data-aos="zoom-in">

        <div className="text-center">
          <h3>Are you interested?</h3>
          <p>Leave your email and be the first to be update when the first course will be available.</p>
          <a className="cta-btn" href="https://www.surveymonkey.com/r/M5BMZ88" target="_blank">NOTIFY ME</a>
        </div>

      </div>
    </section>

  )
}
  
  export default cta;