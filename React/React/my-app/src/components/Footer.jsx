import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <footer style={footerstyle.main}>
          <p style={footerstyle.p} className="text center">
            All rights reserved 2022 @CampusBuddy
          </p>
        </footer>
      </div>
    );
  }
}
var footerstyle = {
  main: {
    position: "relative",
    bottom: "0",
    width: "100%",
    height: "50px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  p:{
     textAlign:"center" 
  }
};

export default Footer;
