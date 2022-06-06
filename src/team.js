import React, { Component } from 'react';


function teamMember(team) {
  
  let snippet=null;

  if(team) {

    snippet = team.map((member,idx) => 
        
          <div key={idx} className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
            <div className="member">
              <img src={member.picture} alt={member.picture} />
              <h4>{member.name}</h4>
              <span>{member.title}</span>
              <p>{member.quote}</p>
              <div className="social">
                {member.twitter ? <a href={member.twitter}><i className="bi bi-twitter"></i></a> : null}
                {member.facebook ? <a href={member.facebook}><i className="bi bi-facebook"></i></a>:null}
                {member.instagram ? <a href={member.instagram}><i className="bi bi-instagram"></i></a>:null}
                {member.linkedin ? <a href={member.linkedin}><i className="bi bi-linkedin"></i></a>:null}
              </div>
            </div>
          </div>         
        
    )

  }
  return(snippet);

}

function team (props){


  return(
    <section id="team" className="team">
      <div className="container">

        <div className="section-title">
          <span>Team</span>
          <h2>Team</h2>
          <p>The dream team in strict alphabetical order. Billy, your Linkedin photo was to low quality</p>
        </div>
        <div  className="row">
          
        <div key="1" className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
            <div className="member">
              <img src="https://s3.eu-central-1.amazonaws.com/liveliterate.com/e2ed240fc5557df8311f9303b58c1ead.jpeg" alt="https://s3.eu-central-1.amazonaws.com/liveliterate.com/e2ed240fc5557df8311f9303b58c1ead.jpeg" />
              <h4>Andy Au</h4>
              <span>Chief Financial Officer</span>
              <p>Numbers have life; they're not just symbols on paper.</p>
              <div className="social">
              </div>
            </div>
          </div> 


        <div key="2" className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
            <div className="member">
              <img src="https://s3.eu-central-1.amazonaws.com/liveliterate.com/eb8e5b7af30ef593027747414312488a.jpeg" alt="https://s3.eu-central-1.amazonaws.com/liveliterate.com/eb8e5b7af30ef593027747414312488a.jpeg" />
              <h4>Billy Cillekens</h4>
              <span>Chief Operations Officer</span>
              <p>I believe equal access to quality education is an important step to fight poverty and offer people equal life opportunities irrespective of their socio-economic, religious-cultural and ethnic-regional backgrounds. </p>
              <div className="social">
              </div>
            </div>
        </div> 
      

        <div key="3" className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
            <div className="member">
              <img src="https://s3.eu-central-1.amazonaws.com/liveliterate.com/0b54f322d7a5a3336877e7a711030927.jpeg" alt="https://s3.eu-central-1.amazonaws.com/liveliterate.com/0b54f322d7a5a3336877e7a711030927.jpeg" />
              <h4>Claudia Carli</h4>
              <span>Chief Marketing Officer</span>
              <p>“Why not” is my motto and essence. </p>
              <div className="social">
              </div>
            </div>
        </div>       
          

        <div key="4" className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
            <div className="member">
              <img src="https://s3.eu-central-1.amazonaws.com/liveliterate.com/Haseeb.jpeg" alt="https://s3.eu-central-1.amazonaws.com/liveliterate.com/Haseeb.jpeg" />
              <h4>Haseeb Shaikh</h4>
              <span>Chief Content Officer</span>
              <p>An educator who'll force you to think. </p>
              <div className="social">
              </div>
            </div>
        </div>  


        <div key="5" className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
            <div className="member">
              <img src="https://s3.eu-central-1.amazonaws.com/liveliterate.com/Noah.jpeg" alt="https://s3.eu-central-1.amazonaws.com/liveliterate.com/Noah.jpeg" />
              <h4>Noah Ian West Alhadeff</h4>
              <span>Chief Executive Officer</span>
              <p>I have broken the spell of, 'I can't.' And I teach it to others. </p>
              <div className="social">
              </div>
            </div>
        </div>         

        <div key="6" className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
            <div className="member">
              <img src="https://s3.eu-central-1.amazonaws.com/liveliterate.com/42780693bfd2dec2a29eb3dbf5712125.png" alt="https://s3.eu-central-1.amazonaws.com/liveliterate.com/42780693bfd2dec2a29eb3dbf5712125.png" />
              <h4>Vincenzo Esposito</h4>
              <span>Chief Technology Officer</span>
              <p>Less is more. </p>
              <div className="social">
              </div>
            </div>
        </div>  
        </div>

      </div>
    </section>

  )
}
  
  export default team;