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
          {listCourses(props.courses)}

        </div>

      </div>
    </section>

  )
}
  
  export default courses;