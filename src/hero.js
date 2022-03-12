import React, { Component } from 'react';


function hero (props){

  let title = props.contents.filter(e => e.id === 4)[0]
  if(title) title = title.Content;

  let subtitle = props.contents.filter(e => e.id === 5)[0]
  if(subtitle) subtitle = subtitle.Content;  

  let tryItButton = props.contents.filter(e => e.id === 30)[0]
  if(tryItButton) tryItButton = tryItButton.Content;  

  let image = props.contents.filter(e => e.id === 27)[0]
  if(image) image = image.Content;    

  return(
    <section id="hero" className="d-flex align-items-center" style={{backgroundImage: 'url('+image+')'}}>
    <div className="container position-relative" data-aos="fade-up" data-aos-delay="500">
      <div dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: subtitle }} />
      <a href="#CourseContent" className="btn-get-started scrollto" onClick={() => props.setShowCourses()}><div dangerouslySetInnerHTML={{ __html: tryItButton }} /></a>
    </div>
  </section>

  )
}
  
  export default hero;