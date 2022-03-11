import React, { useState } from "react";
import { useSelector } from "react-redux";
import HeaderTable from "../HeaderTable/HeaderTable";
import FooterTable from "../FooterTable/FooterTable";
import Employee from "./Employee";

function EmployeesList() {
  const employees = useSelector((state) => state.users);
  const filter = useSelector((state) => state.table.filter);
  const indexStart = useSelector((state) => state.table.indexStart);
  const indexEnd = useSelector((state) => state.table.indexEnd);
  let table = [...employees];

  const [tableSorted, setTableSorted] = useState(
    table.sort((a, b) => {
      return a.firstName > b.firstName;
    })
  );

  const filterEmployee = () => {
    if (filter !== null) {
      return tableSorted.filter((employee) =>
        employee.firstName.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return tableSorted;
    }
  };

  const tableContent = (indexStart, indexEnd) => {
    return filterEmployee()
      .slice(indexStart, indexEnd)
      .map((employee) => <Employee key={employee.id} employee={employee} />);
  };

  return (
    <div className="employeeList">
      <HeaderTable />

      <table className="employeeList__table">
        <thead>
          <tr>
            <th
              className="sort__asc"
              onClick={() => {
                setTableSorted(
                  table.sort((a, b) => {
                    return a.firstName > b.firstName;
                  })
                );
              }}
            >
              First Name
            </th>
            <th
              className="sort__both"
              onClick={() => {
                setTableSorted(
                  table.sort((a, b) => {
                    return a.lastName > b.lastName;
                  })
                );
              }}
            >
              Last Name
            </th>
            <th
              className="sort__both"
              onClick={() =>
                setTableSorted(
                  table.sort((a, b) => {
                    return a.startDate > b.startDate;
                  })
                )
              }
            >
              Start Date
            </th>
            <th
              className="sort__both"
              onClick={() =>
                setTableSorted(
                  table.sort((a, b) => {
                    return a.department > b.department;
                  })
                )
              }
            >
              Departement
            </th>
            <th
              className="sort__both"
              onClick={() =>
                setTableSorted(
                  table.sort((a, b) => {
                    return a.birthday > b.birthday;
                  })
                )
              }
            >
              Date of Birth
            </th>
            <th
              className="sort__both"
              onClick={() =>
                setTableSorted(
                  table.sort((a, b) => {
                    return a.street > b.street;
                  })
                )
              }
            >
              Street
            </th>
            <th
              className="sort__both"
              onClick={() =>
                setTableSorted(
                  table.sort((a, b) => {
                    return a.city > b.city;
                  })
                )
              }
            >
              City
            </th>
            <th
              className="sort__both"
              onClick={() =>
                setTableSorted(
                  table.sort((a, b) => {
                    return a.state > b.state;
                  })
                )
              }
            >
              State
            </th>
            <th
              className="sort__both"
              onClick={() =>
                setTableSorted(
                  table.sort((a, b) => {
                    return a.zip > b.zip;
                  })
                )
              }
            >
              Zip Code
            </th>
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
            tableContent(indexStart, indexEnd)
          )}
        </tbody>
      </table>

      <FooterTable />
    </div>
  );
}

export default EmployeesList;
