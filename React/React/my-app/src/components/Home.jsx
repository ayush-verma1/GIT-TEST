import React, { Component } from "react";
import "../Resources/css/home.css";
import ClgImg from "../Resources/images/collegeBackground.jpg";
import {Link} from "react-router-dom";
import { Button } from "react-bootstrap";
class Home extends Component {
  render() {
    return (
      <div className="homeWrapper">
        <h1 className="heroText">Welcome to Campus Buddy</h1>
        <div className="heroWrapper">
          <div className="left">
            
          </div>
          <div style={headerstyle.head} className="right">
            <Link style={headerstyle.link} to="/login">
              <Button>
                Student Login
              </Button>
            </Link>
            <Link style={headerstyle.link} to="/signup">
              <Button>
                Student Sign Up
              </Button>
            </Link>
            <Link style={headerstyle.link} to="/admins/login">
              <Button>
                Admin Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
var headerstyle={
  head: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    
  },
  link:{
    marginRight:"1rem"
  }
  
}

export default Home;