import React from "react";

function FooterTable() {
  return (
    <div className="footerTable">
      <div>
        Showing <span></span> to 0 of <span></span> entries
      </div>
      <div>
        <button className="btn">Previous</button>
        <button className="btn">Next</button>
      </div>
    </div>
  );
}

export default FooterTable;
