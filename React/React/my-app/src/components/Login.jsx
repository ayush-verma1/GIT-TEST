import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import StudentService from "../Services/StudentService";
export default class Login extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      isAlertShow: false,
      alertType: "danger",
    };
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.loginStudent = this.loginStudent.bind(this);
  }
  changeEmailHandler = (e) => {
    this.setState({ loginEmail: e.target.value });
  };
  changePasswordHandler = (e) => {
    this.setState({ loginPassword: e.target.value });
  };

  emailValidator(email) {
    const isValid = String(email).toLowerCase().match('[a-z0-9]+@gmail.com' );

    if (isValid) {
      return true;
    }
    return false;
  }
  passwordValidator(password) {
    if (password.trim().length === 0) {
      this.setState({ alertMessage: "Invalid Credentials" });
      this.setState({ isAlertShow: true });
      return false;
    }
    return true;
  }
  loginStudent = (e) => {
    e.preventDefault();
    let Student = {
      email: this.state.loginEmail,
      password: this.state.loginPassword,
    };
    var isEmailValid = this.emailValidator(this.state.loginEmail);
    if (!isEmailValid) {
      this.setState({ alertMessage: "Incorrect Email" });
      this.setState({ isAlertShow: true });
      return;
    }
    var isPasswordValid = this.passwordValidator(this.state.loginPassword);
    if (!isPasswordValid) {
      this.setState({ alertMessage: "Incorrect Password" });
      this.setState({ isAlertShow: true });
      return;
    }
    var studObj;
    StudentService.findByEmailAndPassword(Student).then((res) => {
      studObj = res.data;
      console.log(studObj);
      if (studObj.id === 0) {
        this.setState({ alertMessage: "User not found" });
        this.setState({ isAlertShow: true });
        return;
      }

      console.log("Student Object => " + JSON.stringify(studObj));
      this.setState({
        alertMessage: "Student Login Successfull",
      });
      this.setState({ isAlertShow: true });
      this.setState({ alertType: "success" });
      setTimeout(() => {
        console.log(this.history);
        //let navigate = useNavigate();
        //navigate.push("/dashboard", studObj);
        this.props.history.push("/student-dashboard",studObj);
      }, 3000);
    });
  };
  render() {
    const { history } = this.props;
    return (
      <div className="container" style={containerStyle.div}>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Login your Account</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email"placeholder="Email"className="form-control"value={this.state.loginEmail}onChange={this.changeEmailHandler}/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="text"placeholder="Password"className="form-control"value={this.state.loginPassword}onChange={this.changePasswordHandler}/>
                </div>
                <div className="form-group" style={loginButtonStyle.parent}>
                  <div
                    className="btn btn-primary"
                    onClick={this.loginStudent}
                    style={loginButtonStyle.button}
                  >
                    Login
                  </div>
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
    );
  }
}
var containerStyle = {};
var loginButtonStyle = {
  parent: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    width: "20%",
    marginTop: "15px",
  },
};