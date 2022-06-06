import React from 'react';


function listCourses(courses) {
  let snippet=null;

  if(courses){
    snippet = courses.map((course,idx) =>
        <div key={idx} className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
          <div className="icon-box">
            <div className="icon"><i className={course.icon}></i></div>
            <h4><a href="">{course.name}</a></h4>
            <p>{course.shortDesc}</p>
          </div>
        </div>      
    )
  }

  return(snippet);
}


function courses (props){

  return(
    <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <span>Courses</span>
          <h2>Courses</h2>
          <p>More courses to come ... </p>
        </div>

        <div className="row">

        <div key="1" className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
          <div className="icon-box">
            <div className="icon"><i className="bx bxs-bank"></i></div>
            <h4><a href="">Basic financial education</a></h4>
            <p>The right way to interact with money, how to escape to the modern financial traps</p>
          </div>
        </div>      

        <div key="2" className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
          <div className="icon-box">
            <div className="icon"><i className="mdi account-cowboy-hat"></i></div>
            <h4><a href="">What is Recycling?</a></h4>
            <p>Learn the basics of recycling for more sustainable living.</p>
          </div>
        </div>   

        <div key="3" className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-tachometer"></i></div>
            <h4><a href="">Boost Performance</a></h4>
            <p>You don't need superpowers or inborn skills, but master the right methods</p>
          </div>
        </div>                  

        </div>

      </div>
    </section>

  )
}
  
  export default courses;