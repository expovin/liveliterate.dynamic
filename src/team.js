import React, { Component } from 'react';


function teamMember(team) {
  
  let snippet=null;

  if(team) {

    snippet = team.map((member,idx) => 
        
          <div key={idx} className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
            <div className="member">
              <img src={member.picture} alt={member.picture} />
              <div dangerouslySetInnerHTML={{ __html: member.name }} /> 
              <div dangerouslySetInnerHTML={{ __html: member.title }} /> 
              <div dangerouslySetInnerHTML={{ __html: member.quote }} /> 
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

  let p1Team = props.contents.filter(e => e.id === 31)[0]
  if(p1Team) p1Team = p1Team.Content; 

  return(
    <section id="team" className="team">
      <div className="container">

        <div className="section-title">
          <span>Team</span>
          <h2>Team</h2>
          <div dangerouslySetInnerHTML={{ __html: p1Team }} /> 
        </div>
        <div  className="row">
          {teamMember(props.team)}
        </div>
          
      </div>
    </section>

  )
}
  
  export default team;