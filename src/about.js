import React, { Component } from 'react';


function about (props){

  return(
    <section id="about" className="about">
      <div className="container">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
            <img src="https://s3.eu-central-1.amazonaws.com/liveliterate.com/54da060ff12fec52c6a08eecbdde421f.jpeg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
            <h3>What makes us unique</h3>
            <p className="fst-italic">
            We are the first and only online platform that seeks to educate our learners through a combination of on and off-screen activities. Our learning method leverages the digital to provide learners with stimulating and entertaining stories and content that seamlessly transition into practical off-screen activities, engaging with family and friends, and putting their learning into practice.
            </p>            
            <ul>
              <li><i className="bi bi-check-circle"></i>We believe in removing the parents' need to 'control' and 'restrict' a child's learning experience. </li>
              <li><i className="bi bi-check-circle"></i>We believe that it is not only the acquiring of knowledge which is important, but also the fostering of social and real-world skills to apply the knowledge.</li>
              <li><i className="bi bi-check-circle"></i>We believe the relationship between parent and child is key to their learning journey.</li>
            </ul>
            <p>
            The social and emotional learning of children is still undervalued and often disregarded in formal education. This means the responsibility for the most part lies with parents, who may not be very knowledgeable or even aware on how to teach these fundamental concepts to children of varying ages. We at LivLit believe in education that goes beyond the academic and serves more practically to empower children in our current and future world to survive, flourish and create for themselves the future they envision.
            </p>
          </div>
        </div>

      </div>
    </section>

  )
}
  
  export default about;