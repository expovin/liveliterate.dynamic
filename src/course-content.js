import React from 'react';
import Iframe from 'react-iframe'

function courses (props){

  return(

    <section id="CourseContent" className="courseContent">
          <a className="close-button" href="#hero" onClick={() => props.hideShowCourses()}>Close</a>
          <Iframe url={process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL+"/courses" : "/courses"}
                width="100%"
                height="800px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"/>   
    </section>

  )
}
  
  export default courses;