import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Academic from "./Academics/Academic";
import {Link} from "react-router-dom";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentObj: {},
    };
    console.log(props);
  }
  componentDidMount() {
    this.setState({ studentObj: this.props.history.location.state[0] });
  }
  render() {
    return (
      <div className="container">
        <h1 style={dbStyle.heading}> Student Dashboard</h1>
        <div>
          <table
            className="table table-striped table-borderded"
            style={tableStyle.table}
          >
            <thead>
              <tr style={tableStyle.row}>
                <th>Name </th>
                <th>Enrollment</th>
                <th>Semester</th>
                <th>Branch</th>
                <th>Contact</th>
                
              </tr>
            </thead>
            <tbody>
              <tr style={tableStyle.row}>
                <td style={tableStyle.col}>{this.state.studentObj.name}</td>
                <td style={tableStyle.col}>{this.state.studentObj.enroll}</td>
                <td style={tableStyle.col}>{this.state.studentObj.semester}</td>
                <td style={tableStyle.col}>{this.state.studentObj.branch}</td>
                <td style={tableStyle.col}>
                  {this.state.studentObj.contactNo}
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
        <Academic props={this.state.studentObj} />
      </div>
    );
  }
}

var dbStyle = {
  heading: {
    margin: "2rem",
    textAlign: "center",
  },
};

var tableStyle = {
  table: {},
  row: {
    textAlign: "center",
  },
  col: {
    fontWeight: "bold",
    verticalAlign: "middle",
  },
};