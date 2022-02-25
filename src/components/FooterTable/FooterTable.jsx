import React from "react";
import { useSelector } from "react-redux";

function FooterTable() {
  const employeesLength = useSelector((state) => state).length;

  const show = employeesLength === 0 ? 0 : 1;

  return (
    <div className="footerTable">
      <div>
        Showing <span>{show}</span> to <span>{employeesLength}</span> of{" "}
        <span>{employeesLength}</span> entries
      </div>
      <div>
        <button className="btn">Previous</button>
        <button className="btn">Next</button>
      </div>
    </div>
  );
}

export default FooterTable;
