import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Topbar from './topbar';
import Header from './header';
import Hero from './hero';
import About from './about';
import Team from './team';
import Courses from './courses';
import CTA from './cta';
import Contacts from './contacts';
import Footer from './footer';
import CourseContent from './course-content';
import { renderIntoDocument } from 'react-dom/cjs/react-dom-test-utils.production.min';

axios.interceptors.request.use( request =>{
  /** 
   * Qui è possibile editare qualsiasi request in uscita
   * ad esempio aggiungere headers variable 
   * */ 


   return (request)
}, error => {
  /** 
   * Qui è possibile gestire centralmente tutti gli errori
   * in spedizione di requests
   */

   console.log("Errore nella spedizione della request. E' possibile gestirla globalmente da index.js")
   // Rimando il controllo al componente locale
   return Promise.reject(error);
})

axios.interceptors.response.use( response =>{
  /**
   * Qui è possibile editare qualsiasi response in entrata
   * */ 


   return (response)
}, error => {
  /** 
   * Qui è possibile gestire centralmente tutti gli errori
   * in ricezione di response
   */
        

   
   // Rimando il controllo al componente locale
   return Promise.reject(error);
})



class App extends Component {

  state = {
    contents : [],
    courses: [],
    team : [],
    fixTopBar : null,
    section:"Home",
    showCourse:false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);

    this.getContents()
    .then(contents => this.setState({contents:contents}))
    .catch(error => console.log("Error while getting contents "+error));

    this.getCourses()
    .then(contents => this.setState({courses:contents}))
    .catch(error => console.log("Error while getting contents "+error));
    
    this.getTeam()
    .then(contents => this.setState({team:contents}))
    .catch(error => console.log("Error while getting contents "+error));    
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  setShowCourses = () => { this.setState({showCourse:true})}
  hideShowCourses = () => { this.setState({showCourse:false})}


  handleScroll = () => {
    let lastScrollY = window.scrollY;

    if (lastScrollY > 39) {
      this.setState({fixTopBar:" fixed-top"})
    } else {
      this.setState({fixTopBar:null})
    }

    switch(true) {
      case lastScrollY < 759 : this.setState({section:"Home"}); break;
      case lastScrollY < 1630 : this.setState({section:"About"}); break;
      case lastScrollY < 2710 : this.setState({section:"Team"}); break;
      case lastScrollY < 4080 : this.setState({section:"Courses"}); break;
      case lastScrollY > 4081 : this.setState({section:"Contacts"}); break;
    }
      
  }


  getContents = () =>{
    return new Promise ( (fulfill, reject) => {
      axios('/api/contents/')
      .then( result => fulfill(result.data.contents))
      .catch(error => console.log(error))
    })
  }

  getCourses = () =>{
    return new Promise ( (fulfill, reject) => {
      axios('/api/courses/')
      .then( result => fulfill(result.data.contents))
      .catch(error => console.log(error))
    })
  }
  
  getTeam = () =>{
    return new Promise ( (fulfill, reject) => {
      axios('/api/team/')
      .then( result => fulfill(result.data.contents))
      .catch(error => console.log(error))
    })
  }  


  saveMessages = (message) =>{
    return new Promise ( (fulfill, reject) => {
      axios.post('/api/messages/',message)
      .then( result => fulfill(result.data.contents))
      .catch(error => console.log(error))
    })
  }

  showWeb = () => {
    return(
      <main id="main">
      <About contents={this.state.contents}/>
        <Team team={this.state.team}/>
        <Courses courses={this.state.courses} setShowCourses={this.setShowCourses}/>
        <CTA contents={this.state.contents}/>
        <Contacts contents={this.state.contents} saveMessages={this.saveMessages}/>
      </main>
    )
  }

  showCourses = () => {
    return(
      <main id="main">
          <CourseContent hideShowCourses={this.hideShowCourses}/>
      </main>
      
    )
  }


  render(){

    return(
      <div>
          <Topbar contents={this.state.contents}/>
          <Header contents={this.state.contents} fixTopBar={this.state.fixTopBar} section={this.state.section} />
          <Hero contents={this.state.contents} setShowCourses={this.setShowCourses}/>
          {this.state.showCourse ?  this.showCourses() : this.showWeb()}

          <Footer contents={this.state.contents} />        
      </div>
      
    )
  }
}

export default App;
