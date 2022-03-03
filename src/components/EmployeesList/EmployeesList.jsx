import React from "react";
import { useSelector } from "react-redux";
import HeaderTable from "../HeaderTable/HeaderTable";
import FooterTable from "../FooterTable/FooterTable";

function EmployeesList() {
  const employees = useSelector((state) => state.users);
  const filter = useSelector((state) => state.filter);
  // const lengthTable = useSelector((state) => state.table.length);
  const indexStart = useSelector((state) => state.table.indexStart);
  const indexEnd = useSelector((state) => state.table.indexEnd);

  const filterFunction = (element, filter) => {
    if (element.firstName.includes(filter)) {
      return element;
    }
  };
  const test = employees.filter((employee) => filterFunction(employee, filter));

  console.log(test);

  const tableContent = (employees, indexStart, indexEnd) => {
    return employees.slice(indexStart, indexEnd).map((employee) => (
      <tr key={employee.id}>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.startDay}</td>
        <td>{employee.department}</td>
        <td>{employee.birthday}</td>
        <td>{employee.street}</td>
        <td>{employee.city}</td>
        <td>{employee.state}</td>
        <td>{employee.zip}</td>
      </tr>
    ));
  };

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
            tableContent(employees, indexStart, indexEnd)
          )}
        </tbody>
      </table>

      <FooterTable />
    </div>
  );
}

export default EmployeesList;
