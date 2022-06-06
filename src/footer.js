import React, { Component } from 'react';



function footer (props){   
  
  return(
    <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="footer-info">
              <h3>LivLit </h3>
              <p>
              Suite 2201 Eaton Centre 250 Yonge Street <br />
              Toronto Ontario M5B 2L7 Canada<br /><br />
                <strong>Phone:</strong> +39 353 432 8194<br />
                <strong>Email:</strong> clacarli@hotmail.com<br />
              </p>
              <div className="social-links mt-3">
              <a href="skype:Clacarli@hotmail.com" className="skype"><i className="bi bi-skype"></i></a>
              <a href="https://www.linkedin.com/in/claudiacarli/" className="linkedin"><i className="bi bi-linkedin"></i></a>
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