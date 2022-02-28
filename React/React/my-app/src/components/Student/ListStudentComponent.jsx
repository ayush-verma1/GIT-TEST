import React, { Component } from 'react';
import StudentService from '../../Services/StudentService';

export default class ListStudentComponent extends Component {
    constructor(props){
        super(props)

        this.state={

            students: [],
        };
    }
    componentDidMount(){
        StudentService.getStudents().then((res)=>{
            this.setState({students: res.data});


        });
    }
    render() {
        return (
            <div className="container">
                <h2 className='text center'>Student List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Enrollment</th>
                                <th>Branch</th>
                                <th>Semester</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                             {console.log(this.state.students)}
                            {this.state.students.map(student => (
                               
                                    <tr key = {student.id}>
                                        <td>{student.name} </td>
                                        <td>{student.enroll} </td>
                                        <td>{student.branch} </td>
                                        <td>{student.semester} </td>
                                        
                                    </tr>
                                ))
        
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}

