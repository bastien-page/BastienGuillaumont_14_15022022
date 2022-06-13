import React from "react";

function EmployeeListFooter({ employeeLength }) {
  return (
    <div className="footerTable">
      <div>
        Showing <span></span> to <span></span> of <span>{employeeLength}</span>{" "}
        entries
      </div>
      <div>
        <button className="btn">Previous</button>

        <button className="btn">Next</button>
      </div>
    </div>
  );
}

export default EmployeeListFooter;
