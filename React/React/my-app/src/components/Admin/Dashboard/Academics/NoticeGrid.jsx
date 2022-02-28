import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import {Link} from "react-router-dom";
import cardBg from "../../../../Resources/images/newnotice.jpg";
export default class NoticesGrid extends Component {
  render() {
    return (
      <div style={cardStyle.div}>
        <Card.Img variant="top" src={cardBg} style={cardStyle.img} />
        <Card.Body>
          <Card.Title>Notices</Card.Title>
          <Card.Text>Recent notices of college</Card.Text>
          <Link to = "student-notice">
            <Button variant="primary">
              Click Here
            </Button>
          </Link>
        </Card.Body>
      </div>
    );
  }
}
var cardStyle = {
  div: {
    height: "100%",
    border: "2px solid black",
    boxShadow: "8px 8px 4px black",
    margin: "2rem",
    textAlign: "center",
  },
  img: {
    objectFit: "cover",
    width: "300px",
    height: "300px",
    margin: "auto",
  },
};