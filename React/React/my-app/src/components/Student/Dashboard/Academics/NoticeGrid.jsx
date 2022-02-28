import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import cardBg from "../../../../Resources/images/newnotice.jpg";
import {Link} from "react-router-dom";
export default class NoticesGrid extends Component {
  render() {
    return (
      <div style={cardStyle.div}>
        <Card.Img variant="top" src={cardBg} style={cardStyle.img} />
        <Card.Body>
          <Card.Title>Notices</Card.Title>
          <Card.Text>Recwnt notices of college</Card.Text>
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