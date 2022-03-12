import React, { Component } from 'react';


function makeList(elements) {

  let myList=null; 
  if(elements) {
    myList = elements.map((e,idx) => <li key={idx}><i className="bi bi-check-circle"></i> {e} </li>)
  }
  return myList;
}

function about (props){

  let l1Arr=null;

  let image = props.contents.filter(e => e.id === 28)[0]
  if(image) image = image.Content;  

  let title = props.contents.filter(e => e.id === 6)[0]
  if(title) title = title.Content;

  let p1 = props.contents.filter(e => e.id === 7)[0]
  if(p1) p1 = p1.Content;

  let p2 = props.contents.filter(e => e.id === 8)[0]
  if(p2) p2 = p2.Content;  

  let l1 = props.contents.filter(e => e.id === 9)[0]
  if(l1) {
    l1 = l1.Content;  
    l1Arr = l1.split("|");    
  }

  return(
    <section id="about" className="about">
      <div className="container">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
            <img src={image} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
            <div dangerouslySetInnerHTML={{ __html: title }} />   
            <div dangerouslySetInnerHTML={{ __html: p1 }} />   
       
            <ul>
              {makeList(l1Arr)}
            </ul>
              <div dangerouslySetInnerHTML={{ __html: p2 }} /> 
          </div>
        </div>

      </div>
    </section>

  )
}
  
  export default about;