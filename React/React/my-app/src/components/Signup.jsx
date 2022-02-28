import React, { Component } from 'react';
import StudentService from "../Services/StudentService";
import Alert from "react-bootstrap/Alert";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "Praharsh Singh",
          enroll: "0176CS181159",
          branch: "CSE",
          semester: "8",
          contactNo: "9988776655",
          email: "praharsh@gmail.com",
          password: "Praharsh123",
          confirmPassword: "Praharsh123",
          alertMessage: "",
          isAlertShow: false,
          alertType: "danger",
        };
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEnrollHandler = this.changeEnrollHandler.bind(this);
        this.changeBranchHandler = this.changeBranchHandler.bind(this);
        this.changeSemesterHandler = this.changeSemesterHandler.bind(this);
        this.changeContactNoHandler =this.changeContactNoHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeConfirmPasswordHandler =this.changeConfirmPasswordHandler.bind(this);
        this.saveStudent = this.saveStudent.bind(this);

    }
    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }
    changeEnrollHandler = (event) => {
        this.setState({ enroll: event.target.value });
    };
    changeBranchHandler = (event) => {
        this.setState({ branch: event.target.value });
    };
    changeSemesterHandler = (event) => {
        this.setState({ semester: event.target.value });
    };
    changeContactNoHandler = (event) => {
        this.setState({ contactNo: event.target.value });
    };
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    };
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    };
    changeConfirmPasswordHandler = (event) => {
        this.setState({ confirmPassword: event.target.value });
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
    cancel(){
        this.props.history.push('/home');
    }
    saveStudent = (event) => {
        event.preventDefault();
        let Student = {
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
    
        console.log("Student => " + JSON.stringify(Student));
        this.setState({ alertMessage: "Account Created Successfully" });
        this.setState({ isAlertShow: true });
        this.setState({ alertType: "success" });
        setTimeout(() => {
          StudentService.createStudent(Student).then((res) => {
            this.props.history.push("/login");
          });
        }, 3000);
    };
    

    render() {
        const { history } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className="text-center">Create your Account</h3>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text"placeholder="Name"className="form-control"value={this.state.name}onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Enrollment Number</label>
                                        <input type="text"placeholder="Enrollment Number"className="form-control" value={this.state.enroll}onChange={this.changeEnrollHandler}/>
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
                                        <input type="text"placeholder="Password"className="form-control"value={this.state.password}onChange={this.changePasswordHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input type="text"placeholder="Confirm Password"className="form-control"value={this.state.confirmPassword}onChange={this.changeConfirmPasswordHandler}/>
                                    </div>
                                    <div className="btn btn-success"onClick={this.saveStudent}style={{ marginTop: "15px" }}> Save
                                    </div>
                                    <div className="btn btn-danger" onClick={this.cancel}style={{ marginLeft: "15px", marginTop: "15px" }}>Cancel
                                    </div>

                                </form>
                                <Alert show={this.state.isAlertShow}variant={this.state.alertType}style={{ marginTop: "15px" }}>
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

export default Signup;