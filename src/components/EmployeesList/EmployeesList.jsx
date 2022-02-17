import React from "react";
import { useSelector } from "react-redux";

function EmployeesList() {
  const employees = useSelector((state) => state);

  console.log(employees);

  return (
    <div className="employeeList">
      <table className="employeeList__table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Departement</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.user.firstName}</td>
              <td>{employee.user.lastName}</td>
              <td>{employee.user.startDay}</td>
              <td>{employee.user.department}</td>
              <td>{employee.user.birthday}</td>
              <td>{employee.user.street}</td>
              <td>{employee.user.city}</td>
              <td>{employee.user.state}</td>
              <td>{employee.user.zip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesList;
