import React, { Component } from 'react';



function footer (props){

  let contact_arr;

  let title = props.contents.filter(e => e.id === 3)[0]
  if(title) title = title.Content;  

  let address_p1 = props.contents.filter(e => e.id === 16)[0]
  if(address_p1) {
    address_p1 = address_p1.Content; 
    contact_arr = address_p1.split(",");  
  } 

  let email_p1 = props.contents.filter(e => e.id === 18)[0]
  if(email_p1) email_p1 = email_p1.Content;  

  let contact_p1 = props.contents.filter(e => e.id === 20)[0]
  if(contact_p1) { 
    contact_p1 = contact_p1.Content; 
  }
  
  let twitter = props.contents.filter(e => e.id === 21)[0]
  if(twitter) twitter = twitter.Content;

  let facebook = props.contents.filter(e => e.id === 22)[0]
  if(facebook) facebook = facebook.Content;
  
  let instagram = props.contents.filter(e => e.id === 23)[0]
  if(instagram) instagram = instagram.Content;
  
  let skype = props.contents.filter(e => e.id === 24)[0]
  if(skype) skype = skype.Content;
  
  let linkedin = props.contents.filter(e => e.id === 25)[0]
  if(linkedin) linkedin = linkedin.Content;    
  
  return(
    <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="footer-info">
              <h3>{title}</h3>
              <p>
                {contact_arr ? contact_arr[0] : null} <br />
                {contact_arr ? contact_arr[1] : null}<br /><br />
                <strong>Phone:</strong> {contact_p1}<br />
                <strong>Email:</strong> {email_p1}<br />
              </p>
              <div className="social-links mt-3">
              {twitter ?  <a href={twitter} className="twitter"><i className="bi bi-twitter"></i></a> : null}
              {facebook ? <a href={facebook} className="facebook"><i className="bi bi-facebook"></i></a>:null}
              {instagram ? <a href={instagram} className="instagram"><i className="bi bi-instagram"></i></a>:null}
              {skype ? <a href={skype} className="skype"><i className="bi bi-skype"></i></a>:null}
              {linkedin ?  <a href={linkedin} className="linkedin"><i className="bi bi-linkedin"></i></a>:null}
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="#hero">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#team">Team</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="#services">Courses</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright <strong><span>Day</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
        </div>
    </footer>
  )
}
  
  export default footer;