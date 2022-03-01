import React from "react";
import { useSelector } from "react-redux";
import HeaderTable from "../HeaderTable/HeaderTable";
import FooterTable from "../FooterTable/FooterTable";

function EmployeesList() {
  const employees = useSelector((state) => state.user);

  return (
    <div className="employeeList">
      <HeaderTable />

      <table className="employeeList__table">
        <thead>
          <tr>
            <th>
              First Name <span> &and;</span>
              <span>&or;</span>
            </th>
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
          {employees.length === 0 ? (
            <tr>
              <td className="center" colSpan="9">
                No data available in table
              </td>
            </tr>
          ) : (
            employees.map((employee) => (
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
            ))
          )}
        </tbody>
      </table>

      <FooterTable />
    </div>
  );
}

export default EmployeesList;
