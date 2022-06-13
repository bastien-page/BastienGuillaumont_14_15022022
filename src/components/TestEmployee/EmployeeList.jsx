import React from "react";
import EmployeeListHeader from "./EmployeeListHeader";
import { useSelector } from "react-redux";
import EmployeeItem from "./EmployeeItem";
import { useState } from "react";
import EmployeeListFooter from "./EmployeeListFooter";

function EmployeeList() {
  const [filter, setFilter] = useState("");
  const [length, setLength] = useState(10);
  const [employees, setEmployees] = useState([
    ...useSelector((state) => state.users),
  ]);

  return (
    <div className="employeeList">
      <EmployeeListHeader setFilter={setFilter} setLength={setLength} />
      <table className="employeeList__table">
        <thead>
          <tr>
            <th
              onClick={() => {
                console.log("test");
                setEmployees([
                  ...employees.sort(
                    (a, b) =>
                      a.firstName.toLowerCase() > b.firstName.toLowerCase()
                  ),
                ]);
              }}
            >
              First Name{" "}
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
            employees.map((employee) => <EmployeeItem employee={employee} />)
          )}
        </tbody>
      </table>
      <EmployeeListFooter employeeLength={employees.length} />
    </div>
  );
}

export default EmployeeList;
