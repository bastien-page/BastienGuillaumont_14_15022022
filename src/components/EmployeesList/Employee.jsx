import React from "react";

import PropTypes from "prop-types";

function Employee({ employee }) {
  return (
    <tr>
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
  );
}

export default Employee;

Employee.propTypes = {
  employee: PropTypes.object,
};
