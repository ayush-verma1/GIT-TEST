import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import cardBg from "../../../../Resources/images/newholiday.jpg";
class HolidayGrid extends Component {
  render() {
    return (
      <div style={cardStyle.div}>
        <Card.Img variant="top" src={cardBg} style={cardStyle.img} />
        <Card.Body>
          <Card.Title>Holidays</Card.Title>
          <Card.Text>
            Check total holidays of 2022
          </Card.Text>
          <Link to = "holidays">
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
    minHeight: "100%",
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
export default HolidayGrid;
