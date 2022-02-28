import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import {Link} from "react-router-dom";
import cardBg from "../../../../Resources/images/newtime.jpg";
export default class TimetableGrid extends Component {
  render() {
    return (
      <div style={cardStyle.div}>
        <Card.Img variant="top" src={cardBg} style={cardStyle.img} />
        <Card.Body>
          <Card.Title>Time Table</Card.Title>
          <Card.Text>
            Have a look on daily class schedule
          </Card.Text>
          <Link to = "time-table">
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