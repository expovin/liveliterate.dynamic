import React from 'react';


function header (props){
  
  
  return(
    <header id="header" className={"d-flex align-items-center" + props.fixTopBar} >
    <div className="container d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo"><img src="favicon.png" alt="" className="img-fluid" /></a>
      <h1 className="logo"><a href="index.html">LivLit</a></h1>            

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className={props.section ==="Home" ? "nav-link scrollto active" : "nav-link scrollto"} href="#hero">Home</a></li>
          <li><a className={props.section ==="About" ? "nav-link scrollto active" : "nav-link scrollto"} href="#about">About</a></li>
          <li><a className={props.section ==="Team" ? "nav-link scrollto active" : "nav-link scrollto"} href="#team">Team</a></li>
          <li><a className={props.section ==="Courses" ? "nav-link scrollto active" : "nav-link scrollto"} href="#services">Courses</a></li>          
          <li><a className={props.section ==="Contacts" ? "nav-link scrollto active" : "nav-link scrollto"} href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>

  )
}
  
  export default header;