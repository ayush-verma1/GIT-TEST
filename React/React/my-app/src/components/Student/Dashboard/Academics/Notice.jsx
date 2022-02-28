import React, { Component } from "react";
import StudentService from "../../../../Services/StudentService";

export default class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // adminName: "",
      // adminEmail: "",
      noticeList: [],
    };
  }
  componentDidMount() {
    StudentService.getNotices().then((res) => {
      console.log(res.data);
      // this.setState({ adminName: this.props.history.location.state.name });
      // this.setState({ adminEmail: this.props.history.location.state.email });
      this.setState({ noticeList: res.data });
    });
  }
  render() {
    return (
      <div className="container">
        <h2 className="text-center" style={noticeTableStyle.heading}>
          Notices
        </h2>
        <div className="row">
          <table
            className="table table-striped table-borderded"
            style={noticeTableStyle.table}
          >
            <thead>
              <tr style={noticeTableStyle.tr}>
                <th style={noticeTableStyle.th}>Type </th>
                <th style={noticeTableStyle.th}>Description</th>
                {/* <th style={noticeTableStyle.th}>Admin Name</th>
                <th style={noticeTableStyle.th}>Admin Email</th> */}
              </tr>
            </thead>
            <tbody style={noticeTableStyle.tbody}>
              {console.log(this.state.noticeList)}
              {this.state.noticeList.map((element) => (
                <tr key={element.id}>
                  <td style={noticeTableStyle.td}>{element.type}</td>
                  <td style={noticeTableStyle.td}>{element.description}</td>
                  {/* <td style={noticeTableStyle.td}>{this.state.adminName}</td>
                  <td style={noticeTableStyle.td}>{this.state.adminEmail}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
var noticeTableStyle = {
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    margin: "2rem auto",
  },
  table: {
    border: "2px solid black",
    boxShadow: "6px 6px 2px black",
    backgroundColor: "white",
  },
  tr: {
    padding: "2rem 1rem",
    margin: "1rem",
  },
  th: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "black",
    padding: "1rem 1rem",
  },
  td: {
    fontSize: "1.2rem",
    fontWeight: "300",
    color: "black",
    padding: "1rem 1rem",
  },
  }
