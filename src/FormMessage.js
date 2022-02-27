import React, { Component } from 'react';


class FormMessage extends Component {

  state = {
    messageSent:false
  }
  data = {
    name:null,
    email:null,
    subject:null,
    message:null
  }

  handleData = (e) => {
    this.data[e.target.name]=e.target.value;
  }

  sendMessage = () => {
    console.log(this.data);
    this.props.saveMessages(this.data)
    .then(result => this.setState({messageSent:true}))
    .catch(error => console.log(error))
  }

render() {
  return(
          <div className="col-lg-6">
            <form>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" onChange={this.handleData} required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={this.handleData} required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" onChange={this.handleData} required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" onChange={this.handleData} required></textarea>
              </div>
              <div className="my-3">
                
                <div className="error-message"></div>
                {this.state.messageSent ? <div className="sent-message">Your message has been sent. Thank you!</div> : null}
                
              </div>
              
            </form>
            <div className="text-center"><button type="submit" onClick={this.sendMessage}>Send Message</button></div>
          </div>

  )
}

}
  
  export default FormMessage;