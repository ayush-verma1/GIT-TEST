import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Academic from "./Academics/Academic";
import {Link} from "react-router-dom";
export default class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminObj: {},
    };
  }
  componentDidMount() {
    this.setState({ adminObj: this.props.location.state });
  }
  render() {
    return (
      <div className="container">
        <h1 style={dashboardStyle.heading}> Admin Dashboard</h1>
        <div>
          <table
            className="table table-striped table-borderded"
            style={tableStyle.table}
          >
            <thead>
              <tr style={tableStyle.row}>
                
                <th>View All Students</th>
              </tr>
            </thead>
            <tbody>
              <tr style={tableStyle.row}>
                
                <td style={tableStyle.col}>
                  <Link
                    to={{
                      pathname: "all-students",
                      state: this.state.adminObj,
                    }}
                  >
                    <Button style={tableStyle.btn}>Click Here</Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Academic props={this.state.adminObj} />
      </div>
    );
  }
}
var dashboardStyle = {
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