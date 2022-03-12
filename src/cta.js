import React, { Component } from 'react';



function cta (props){

  let title = props.contents.filter(e => e.id === 10)[0]
  if(title) title = title.Content;

  let p1 = props.contents.filter(e => e.id === 11)[0]
  if(p1) p1 = p1.Content;

  let bt = props.contents.filter(e => e.id === 12)[0]
  if(bt) bt = bt.Content;  

  let image = props.contents.filter(e => e.id === 29)[0]
  if(image) image = image.Content;    

  return(
    <section id="cta" className="cta" style={{backgroundImage: 'url('+image+')'}}>
      <div className="container" data-aos="zoom-in">

        <div className="text-center">
          <div dangerouslySetInnerHTML={{ __html: title }} /> 
          <div dangerouslySetInnerHTML={{ __html: p1 }} /> 
          <a className="cta-btn" href="https://www.surveymonkey.com/r/M5BMZ88" target="_blank"><div dangerouslySetInnerHTML={{ __html: bt }} /> </a>
        </div>

      </div>
    </section>

  )
}
  
  export default cta;