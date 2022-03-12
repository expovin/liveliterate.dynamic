import React from 'react';


function header (props){

  let title = props.contents.filter(e => e.id === 3)[0]
  if(title) title = title.Content;
  
  
  return(
    <header id="header" className={"d-flex align-items-center" + props.fixTopBar} >
    <div className="container d-flex align-items-center justify-content-between">

    <div dangerouslySetInnerHTML={{ __html: title }} />           

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto" className={props.section =="Home" ? "active" : null} href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" className={props.section =="About" ? "active" : null} href="#about">About</a></li>
          <li><a className="nav-link scrollto" className={props.section =="Team" ? "active" : null} href="#team">Team</a></li>
          <li><a className="nav-link scrollto" className={props.section =="Courses" ? "active" : null} href="#services">Courses</a></li>          
          <li><a className="nav-link scrollto" className={props.section =="Contacts" ? "active" : null} href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>

  )
}
  
  export default header;