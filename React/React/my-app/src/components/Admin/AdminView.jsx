import React, { Component } from "react";

import {Link} from "react-router-dom";
import { Button } from "react-bootstrap";
import AdminService from "../../Services/AdminService";
import StudentService from "../../Services/StudentService";
export default class AdminView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
    this.deleteStudent = this.deleteStudent.bind(this);
  }
  deleteStudent(id) {
    AdminService.deleteStudent(id).then((res) => {
      this.setState({
        students: this.state.students.filter((e) => e.id !== id),
      });
    });
  }
  componentDidMount() {
    AdminService.getStudents().then((res) => {
      this.setState({ students: res.data });
    });
  }
  render() {
    return (
      <div className="container">
        <h2>Students List</h2>
        <div className="row">
          <table className="table table-striped table-borderded">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student Email</th>
                <th>Student Semester</th>
                <th>Student Branch</th>
                
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.semester}</td>
                  <td>{student.branch}</td>
                  <td>
                    <Link
                      to={{
                        pathname: "edit-student-profile",
                        state: student,
                      }}
                    >
                      <Button>Edit</Button>
                    </Link>
                    <Button
                      className="mx-2"
                      variant="danger"
                      onClick={() => this.deleteStudent(student.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
var StudentsTableStyle = {
  heading: {
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: "bold",
    margin: "2rem auto",
  },
  table: {
    border: "2px solid black",
    boxShadow: "6px 6px 2px black",
    backgroundColor: "#6C63FF",
  },
  tr: {
    padding: "2rem 1rem",
    margin: "1rem",
  },
  th: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "white",
    padding: "1rem 1rem",
  },
  td: {
    fontSize: "1.2rem",
    fontWeight: "300",
    color: "white",
    padding: "1rem 1rem",
  },
  editBtn: {
    fontWeight: "bold",
    backgroundColor: "white",
    color: "black",
  },
};