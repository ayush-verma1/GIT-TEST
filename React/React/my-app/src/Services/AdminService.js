import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1";

class AdminService {
  getStudents() {
    return axios.get(STUDENT_API_BASE_URL + "/admin/allStudents");
  }
  createAdmin(admin) {
    return axios.post(STUDENT_API_BASE_URL + "/admin", admin);
  }
  loginAdmin(admin){
    return axios.post(STUDENT_API_BASE_URL+'/login', admin);
  } 
  deleteStudent(studentId) {
    return axios.delete(STUDENT_API_BASE_URL + "/students/" + studentId);
  }
 
  findByEmailAndPassword(admin) {
    return axios.post(STUDENT_API_BASE_URL + "/admin/login", admin);
  }
  getTimeTable() {
    return axios.get(STUDENT_API_BASE_URL + "/admin/timetable");
  }
  addNotice(noticeObj) {
    return axios.post(STUDENT_API_BASE_URL + "/admin/notice", noticeObj);
  }

  sendFeedback(feedbackObj) {
    return axios.post(STUDENT_API_BASE_URL + "/admin/feedback", feedbackObj);
  }
  fetchNotices() {
    return axios.get(STUDENT_API_BASE_URL + "/admin/all-notices");
  }
  
}
export default new AdminService();