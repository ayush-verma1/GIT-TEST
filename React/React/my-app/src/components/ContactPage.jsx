import React, { Component } from "react";

class ContactPage extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-center my-2">Contact Us</h2>
        <div className="row">
          <table className="table table-striped table-borderded">
            <thead>
              <tr>
                <th>Department </th>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>Reception</td>
                <td>Aarpana Tiwari</td>
                <td>arpana@gmail.com</td>
                <td>987676789</td>
              </tr>
              <tr>
                <td>Admission cell</td>
                <td>Subodh Nayak</td>
                <td>subodh@gmail.com</td>
                <td>924576789</td>
              </tr>
              <tr>
                <td>Busroute Info</td>
                <td>Ashok Rawat</td>
                <td>ashok@gmail.com</td>
                <td>923455789</td>
              </tr>
              <tr>
                <td>Placement</td>
                <td>Anuj Garg</td>
                <td>anuj@gmail.com</td>
                <td>987699989</td>
              </tr>
              <tr>
                <td>Other</td>
                <td>Harendra Singh</td>
                <td>harendra@gmail.com</td>
                <td>9876333789</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ContactPage;
