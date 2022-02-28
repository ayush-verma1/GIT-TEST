import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AdminService from "../../Services/AdminService";
export default class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      isAlertShow: false,
      alertType: "danger",
    };
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.loginAdmin = this.loginAdmin.bind(this);
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
  loginAdmin = (e) => {
    e.preventDefault();
    let Admin = {
      email: this.state.loginEmail,
      password: this.state.loginPassword,
    };
    var isEmailValid = this.emailValidator(this.state.loginEmail);
    if (!isEmailValid) {
      this.setState({ alertMessage: "Invalid Credentials" });
      this.setState({ isAlertShow: true });
      return;
    }
    var isPasswordValid = this.passwordValidator(this.state.loginPassword);
    if (!isPasswordValid) {
      this.setState({ alertMessage: "Invalid Credentials" });
      this.setState({ isAlertShow: true });
      return;
    }
    var adminObj;

    AdminService.findByEmailAndPassword(Admin).then((res) => {
     
      adminObj = res.data;
      console.log(adminObj);
      if (adminObj.id === 0) {
        this.setState({ alertMessage: "Invalid Credentials" });
        this.setState({ isAlertShow: true });
        return;
      }

      console.log("Admin Obj => " + JSON.stringify(adminObj));
      this.setState({
        alertMessage: "Admin Login Successfull, Redirecting to Dashboard",
      });
      this.setState({ isAlertShow: true });
      this.setState({ alertType: "success" });
      setTimeout(() => {
        console.log(this.history);
        this.props.history.push("/admin/dashboard", adminObj);
      }, 3000);
    });
  };
  render() {
    const { history } = this.props;
    return (
      <div className="container" style={containerStyle.div}>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Login your Admin Account</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={this.state.loginEmail}
                    onChange={this.changeEmailHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="text"
                    placeholder="Password"
                    className="form-control"
                    value={this.state.loginPassword}
                    onChange={this.changePasswordHandler}
                  />
                </div>
                <div className="form-group" style={loginButtonStyle.parent}>
                  <div
                    className="btn btn-primary"
                    onClick={this.loginAdmin}
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
    width: "30%",
    marginTop: "10px",
  },
};