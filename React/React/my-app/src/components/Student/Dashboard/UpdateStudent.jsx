import React, { Component } from "react";
import StudentService from "../../../Services/StudentService";
import Alert from "react-bootstrap/Alert";

export default class UpdateStudent extends Component {
  constructor(props) {
    super(props);
    
    let studentInfo = this.props.location.state;
    this.state = {
      id: studentInfo.id,
      name: studentInfo.name,
      enroll: studentInfo.enroll,
      branch: studentInfo.branch,
      semester: studentInfo.semester,
      contactNo: studentInfo.contactNo,
      email: studentInfo.email,
      password: studentInfo.password,
      confirmPassword: studentInfo.password,
      alertMessage: studentInfo.alertMessage,
      isAlertShow: false,
      alertType: "danger",
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEnrollHandler = this.changeEnrollHandler.bind(this);
    this.changeBranchHandler = this.changeBranchHandler.bind(this);
    this.changeSemesterHandler = this.changeSemesterHandler.bind(this);
    this.changeContactNoHandler =
      this.changeContactNoHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeConfirmPasswordHandler =
      this.changeConfirmPasswordHandler.bind(this);

    this.saveStudent = this.saveStudent.bind(this);
  }
  changeNameHandler = (e) => {
    this.setState({ name: e.target.value });
  };
 
  changeEnrollHandler = (e) => {
    this.setState({ enroll: e.target.value });
  };
  changeBranchHandler = (e) => {
    this.setState({ branch: e.target.value });
  };
  changeSemesterHandler = (e) => {
    this.setState({ semester: e.target.value });
  };
  changeContactNoHandler = (e) => {
    this.setState({ contactNo: e.target.value });
  };
  changeEmailHandler = (e) => {
    this.setState({ email: e.target.value });
  };
  changePasswordHandler = (e) => {
    this.setState({ password: e.target.value });
  };
  changeConfirmPasswordHandler = (e) => {
    this.setState({ confirmPassword: e.target.value });
  };
 
 
  emailValidator(email) {
    const isValid = String(email).toLowerCase().match('[a-z0-9]+@gmail.com');
    if (isValid) {
      return true;
    }
    this.setState({ alertMessage: "Invalid Email" });
    this.setState({ isAlertShow: true });
    return false;
  }
  passwordValidator(password) {
    const isValid = String(password).match('(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,15})$')
        if (isValid) {
          return true;
        }
        this.setState({alertMessage: "Invalid Password"});
        this.setState({ isAlertShow: true });
        return false;
  }
  confirmPasswordValidator(confirmpassword) {
    if (this.state.password === confirmpassword) return true;
    this.setState({ alertMessage: "Password does not match" });
    this.setState({ isAlertShow: true });
    return false;
  }

  saveStudent = (e) => {
    e.preventDefault();
    let Student = {
      id: this.state.id,
      name: this.state.name,
      enroll: this.state.enroll,
      branch: this.state.branch,
      semester: this.state.semester,
      contactNo: this.state.contactNo,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
 
    var isEmailValid = this.emailValidator(this.state.email);
    if (!isEmailValid) {
      return;
    }
    var isPasswordValid = this.passwordValidator(this.state.password);
    if (!isPasswordValid) {
      return;
    }
    var isConfirmPasswordValid = this.confirmPasswordValidator(
      this.state.confirmPassword
    );
    if (!isConfirmPasswordValid) {
      return;
    }
   
    // console.log("Student => " + JSON.stringify(Student));
    this.setState({ alertMessage: "Account Details Updated Successfully" });
    this.setState({ isAlertShow: true });
    this.setState({ alertType: "success" });
    setTimeout(() => {
      StudentService.updateStudent(Student, this.state.id).then((res) => {
        // this.props.history.push("/students");
      });
    }, 3000);
  };

  render() {
    const { history } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update your Profile</h3>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text"placeholder="Name"className="form-control"value={this.state.name}onChange={this.changeNameHandler}/>
                  </div>
                
                  <div className="form-group">
                    <label>Enrollment Number</label>
                    <input type="text"placeholder="Enrollment Number"className="form-control"value={this.state.enroll}onChange={this.changeEnrollHandler}/>
                  </div>
                  <div className="form-group">
                    <label>Branch</label>
                    <input type="text"placeholder="Branch"className="form-control"value={this.state.branch}onChange={this.changeBranchHandler}/>
                  </div>
                  <div className="form-group">
                    <label>Semester</label>
                    <input type="text"placeholder="Semester"className="form-control"value={this.state.semester}onChange={this.changeSemesterHandler}/>
                  </div>
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input type="text"placeholder="Contact Number"className="form-control"value={this.state.contactNo}onChange={this.changeContactNoHandler}/>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email"placeholder="Email"className="form-control"value={this.state.email}onChange={this.changeEmailHandler}/>
                  </div>    
                  <div className="form-group">
                    <label>Password</label>
                    <input type ="text" placeholder="Password"className="form-control"value={this.state.password}onChange={this.changePasswordHandler}/>
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="text"placeholder="Confirm Password"className="form-control"value={this.state.confirmPassword}onChange={this.changeConfirmPasswordHandler}/>
                  </div>
                  <div
                    className="btn btn-success"
                    onClick={this.saveStudent}
                    style={{ marginTop: "15px" }}
                  >
                    Save
                  </div>
                  
                </form>
                <Alert
                  show={this.state.isAlertShow}
                  variant={this.state.alertType}
                  style={{ marginTop: "10px" }}
                >
                  {this.state.alertMessage}
                </Alert>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}