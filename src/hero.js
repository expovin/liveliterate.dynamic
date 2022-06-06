import React, { Component } from 'react';



function hero (props){   

  return(
    <section id="hero" className="d-flex align-items-center" style={{backgroundImage: 'url(https://s3.eu-central-1.amazonaws.com/liveliterate.com/c879d46868e17b54d5038697240ff689.jpeg)'}}>
    <div className="container position-relative" data-aos="fade-up" data-aos-delay="500">
      <h1>LEARN IT, LIVE IT, LIVLIT</h1>
      <h2>Equipping children with the knowledge and skills to lead their best lives.</h2>
      <a href="#CourseContent" className="btn-get-started scrollto" onClick={() => props.setShowCourses()}>Try it now!</a>
    </div>
  </section>

  )
}
  
  export default hero;