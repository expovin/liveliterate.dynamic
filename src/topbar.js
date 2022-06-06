import React, { Component } from 'react';


function topbar (props){
/*
  let email = props.contents.filter(e => e.id === 1)[0]
  if(email) email = email.Content;

  let phone = props.contents.filter(e => e.id === 2)[0]
  if(phone) phone = phone.Content;

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
*/
  return(
    <section id="topbar" className="d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope-fill"></i><a href={"mailto:clacarli@hotmail.com "}>clacarli@hotmail.com</a>
          <i className="bi bi-phone-fill phone-icon"></i>+39 353 432 8194 
        </div>
        <div className="social-links d-none d-md-block">
        <a href="skype:Clacarli@hotmail.com?Call" className="skype"><i className="bi bi-skype"></i></a>
        <a href="https://www.linkedin.com/in/claudiacarli/" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </section>

  )
}
  
  export default topbar;