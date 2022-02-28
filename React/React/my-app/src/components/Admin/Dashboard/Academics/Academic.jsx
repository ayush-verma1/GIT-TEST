import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import AcademicBg from "../../../../Resources/images/academics.jpg";
import { Link } from "react-router-dom";
import TimetableGrid from "./TimetableGrid";
import HolidayGrid from "./HolidayGrid";
import NoticeGrid from "./NoticeGrid";
import FeedbackGrid from "./FeedbackGrid";
export default class Academic extends Component {
  render() {
    return (
      <div className="container" style={cardStyle.div}>
        <TimetableGrid />
        <HolidayGrid />
        <NoticeGrid />
        <FeedbackGrid props={this.props} />
      </div>
    );
  }
}

var cardStyle = {
  div: {
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
};