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
          {teamMember(props.team)}
        </div>
          
      </div>
    </section>

  )
}
  
  export default team;