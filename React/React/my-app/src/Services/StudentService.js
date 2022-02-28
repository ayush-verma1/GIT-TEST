import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1";
class StudentService{
    getStudents(){
        return axios.get(STUDENT_API_BASE_URL+ "/students");

    }
    createStudent(student){
        return axios.post(STUDENT_API_BASE_URL+ "/student", student);
    }
    loginStudent(student){
        return axios.post(STUDENT_API_BASE_URL+'/login', student);
    }
    
    updateStudent(student, studentId) {
        return axios.put(STUDENT_API_BASE_URL + "/students/" + studentId, student);
    }
    findByEmailAndPassword(student) {
        return axios.post(STUDENT_API_BASE_URL + "/student/login", student);
    }
    getNotices() {
        return axios.get(STUDENT_API_BASE_URL + "/student/notices");
    }
    getTimeTable() {
        return axios.get(STUDENT_API_BASE_URL + "/student/timetable");
    }
    
    sendFeedback(feedbackObj) {
        return axios.post(STUDENT_API_BASE_URL + "/student/feedback", feedbackObj);
    }
    

}
export default new StudentService();