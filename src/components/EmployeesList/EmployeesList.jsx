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

  const [sortLabel, setSortLabel] = useState("firstName");
  const [sortAsc, setSortAsc] = useState(true);

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
              id="firstName"
              className={
                sortLabel !== "firstName"
                  ? "sort__both"
                  : sortAsc
                  ? "sort__asc"
                  : "sort__des"
              }
              onClick={(e) => {
                if (e.target.id === sortLabel) {
                  setTableSorted([...tableSorted.reverse()]);
                  setSortAsc(!sortAsc);
                } else {
                  setSortLabel(e.target.id);
                  setTableSorted([
                    ...table.sort((a, b) => {
                      return (
                        a.firstName.toLowerCase() > b.firstName.toLowerCase()
                      );
                    }),
                  ]);
                  setSortAsc(true);
                }
              }}
            >
              First Name
            </th>
            <th
              id="lastName"
              className={
                sortLabel !== "lastName"
                  ? "sort__both"
                  : sortAsc
                  ? "sort__asc"
                  : "sort__des"
              }
              onClick={(e) => {
                if (e.target.id === sortLabel) {
                  setTableSorted([...tableSorted.reverse()]);
                  setSortAsc(!sortAsc);
                } else {
                  setSortLabel(e.target.id);
                  setSortAsc(true);
                  setTableSorted([
                    ...table.sort((a, b) => {
                      return (
                        a.lastName.toLowerCase() > b.lastName.toLowerCase()
                      );
                    }),
                  ]);
                }
              }}
            >
              Last Name
            </th>
            <th
              id="startDate"
              className={
                sortLabel !== "startDate"
                  ? "sort__both"
                  : sortAsc
                  ? "sort__asc"
                  : "sort__des"
              }
              onClick={(e) => {
                if (e.target.id === sortLabel) {
                  setTableSorted([...tableSorted.reverse()]);
                  setSortAsc(!sortAsc);
                } else {
                  setSortLabel(e.target.id);
                  setSortAsc(true);
                  setTableSorted([
                    ...table.sort((a, b) => {
                      return (
                        a.startDate.toLowerCase() > b.startDate.toLowerCase()
                      );
                    }),
                  ]);
                }
              }}
            >
              Start Date
            </th>
            <th
              id="department"
              className={
                sortLabel !== "department"
                  ? "sort__both"
                  : sortAsc
                  ? "sort__asc"
                  : "sort__des"
              }
              onClick={(e) => {
                if (e.target.id === sortLabel) {
                  setTableSorted([...tableSorted.reverse()]);
                  setSortAsc(!sortAsc);
                } else {
                  setSortLabel(e.target.id);
                  setSortAsc(true);
                  setTableSorted([
                    ...table.sort((a, b) => {
                      return (
                        a.department.toLowerCase() > b.department.toLowerCase()
                      );
                    }),
                  ]);
                }
              }}
            >
              Departement
            </th>
            <th
              id="birthday"
              className={
                sortLabel !== "birthday"
                  ? "sort__both"
                  : sortAsc
                  ? "sort__asc"
                  : "sort__des"
              }
              onClick={(e) => {
                if (e.target.id === sortLabel) {
                  setTableSorted([...tableSorted.reverse()]);
                  setSortAsc(!sortAsc);
                } else {
                  setSortLabel(e.target.id);
                  setSortAsc(true);
                  setTableSorted([
                    ...table.sort((a, b) => {
                      return (
                        a.birthday.toLowerCase() > b.birthday.toLowerCase()
                      );
                    }),
                  ]);
                }
              }}
            >
              Date of Birth
            </th>
            <th
              id="street"
              className={
                sortLabel !== "street"
                  ? "sort__both"
                  : sortAsc
                  ? "sort__asc"
                  : "sort__des"
              }
              onClick={(e) => {
                if (e.target.id === sortLabel) {
                  setTableSorted([...tableSorted.reverse()]);
                  setSortAsc(!sortAsc);
                } else {
                  setSortLabel(e.target.id);
                  setSortAsc(true);
                  setTableSorted([
                    ...table.sort((a, b) => {
                      return a.street.toLowerCase() > b.street.toLowerCase();
                    }),
                  ]);
                }
              }}
            >
              Street
            </th>

            <th
              id="city"
              className={
                sortLabel !== "city"
                  ? "sort__both"
                  : sortAsc
                  ? "sort__asc"
                  : "sort__des"
              }
              onClick={(e) => {
                if (e.target.id === sortLabel) {
                  setTableSorted([...tableSorted.reverse()]);
                  setSortAsc(!sortAsc);
                } else {
                  setSortLabel(e.target.id);
                  setSortAsc(true);
                  setTableSorted([
                    ...table.sort((a, b) => {
                      return a.city.toLowerCase() > b.city.toLowerCase();
                    }),
                  ]);
                }
              }}
            >
              City
            </th>
            <th
              id="state"
              className={
                sortLabel !== "state"
                  ? "sort__both"
                  : sortAsc
                  ? "sort__asc"
                  : "sort__des"
              }
              onClick={(e) => {
                if (e.target.id === sortLabel) {
                  setTableSorted([...tableSorted.reverse()]);
                  setSortAsc(!sortAsc);
                } else {
                  setSortLabel(e.target.id);
                  setSortAsc(true);
                  setTableSorted([
                    ...table.sort((a, b) => {
                      return a.state.toLowerCase() > b.state.toLowerCase();
                    }),
                  ]);
                }
              }}
            >
              State
            </th>
            <th
              id="zip"
              className={
                sortLabel !== "zip"
                  ? "sort__both"
                  : sortAsc
                  ? "sort__asc"
                  : "sort__des"
              }
              onClick={(e) => {
                if (e.target.id === sortLabel) {
                  setTableSorted([...tableSorted.reverse()]);
                  setSortAsc(!sortAsc);
                } else {
                  setSortLabel(e.target.id);
                  setSortAsc(true);
                  setTableSorted([
                    ...table.sort((a, b) => {
                      return a.zip.toLowerCase() > b.zip.toLowerCase();
                    }),
                  ]);
                }
              }}
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
