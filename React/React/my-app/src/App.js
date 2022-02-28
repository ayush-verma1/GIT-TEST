import logo from "./logo.svg";
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import ListStudentComponent from "./components/Student/ListStudentComponent";
import AdminLogin from "./components/Admin/AdminLogin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminView from "./components/Admin/AdminView";
import UpdateStudent from "./components/Student/Dashboard/UpdateStudent";
import AdminUpdate from "./components/Admin/Dashboard/AdminUpdate";
import Timetable from "./components/Student/Dashboard/Academics/Timetable";
import Holiday from "./components/Student/Dashboard/Academics/Holiday";
import Feedback from "./components/Student/Dashboard/Academics/Feedback";
import Dashboard from "./components/Student/Dashboard/Dashboard";
import AdminDashboard from "./components/Admin/Dashboard/AdminDashboard";
import Notice from "./components/Student/Dashboard/Academics/Notice";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";




function App() {
  return (
    <Router>
      <Header />

      <Switch>
        
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/student-dashboard" component={Dashboard}></Route>
        <Route path="/holidays"><Holiday/></Route>
        <Route path="/time-table" component={Timetable }></Route>
        <Route path="/student-notice" component={Notice}></Route>
        <Route path="/feedback" component={Feedback}></Route>
        <Route path="/updateStudent" component={UpdateStudent}></Route>

      
        <Route path="/admins/login" component={AdminLogin}></Route>
        <Route path="/admin/dashboard" component={AdminDashboard}></Route>
        <Route
          path="/admin/all-students"
          component={AdminView}
        ></Route>
        <Route
          path="/admin/edit-student-profile"
          component={AdminUpdate}
        ></Route>
        <Route path="/admin/time-table" component={Timetable}></Route>
        <Route path="/admin/holidays" component={Holiday}></Route>
        <Route path="/admin/student-notice" component={Notice}></Route>
        <Route path="/admin/feedback" component={Feedback}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route path="/notice" component={Notice}></Route>
        
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
