import React from "react";
import { Link } from "react-router-dom";
import EmployeesList from "../components/EmployeesList/EmployeesList";
import Header from "../components/Header/Header";

function Employee() {
  return (
    <>
      <Header />
      <main>
        <h2>Current Employees</h2>
        <EmployeesList />

        <Link className="btn employee" to="/BastienGuillaumont_14_15022022/">
          Home
        </Link>
      </main>
    </>
  );
}

export default Employee;
