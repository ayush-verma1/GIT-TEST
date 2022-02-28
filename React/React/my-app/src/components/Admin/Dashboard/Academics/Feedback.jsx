import React, { Component } from "react";
import StudentService from "../../../../Services/StudentService";
import { Alert } from "react-bootstrap";

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      student: "",
      isAlertShow: false,
      isAlertType: "danger",
    };
    this.changeMessageHandler = this.changeMessageHandler.bind(this);
  }
  componentDidMount() {
    this.setState({ student: this.props.location.state });
    this.setState({ name: this.props.location.state.name });
    this.setState({ email: this.props.location.state.email });
  }
  changeMessageHandler = (e) => {
    this.setState({ message: e.target.value });
  };
  sendFeedback = (e) => {
    e.preventDefault();
    let feedBackObj = {
      student: this.state.student,
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    
    this.setState({
      alertMessage:
        "Feedback Submitted Successfully , Redirecting to dashboard",
    });
    this.setState({ isAlertShow: true });
    this.setState({ alertType: "success" });
    setTimeout(() => {
      StudentService.sendFeedback(feedBackObj).then((res) => {
        this.props.history.push("dashboard", this.state.student);
      });
    }, 3000);
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Feedback</h3>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <label>Name</label>
                    <input  type="text" placeholder="Name"className="form-control"value={this.state.name}/>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email"placeholder="Email"className="form-control"value={this.state.email}/>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <input type="text"placeholder="Feedback Message"className="form-control"onChange={this.changeMessageHandler}/>
                  </div>
                  <div className="btn btn-success"onClick={this.sendFeedback}style={{ marginTop: "10px" }}>
                    Submit
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