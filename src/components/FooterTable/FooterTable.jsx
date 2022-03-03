import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { next, previous } from "../../slices/table.slice";

function FooterTable() {
  const totalEmployees = useSelector((state) => state.users).length;
  const lengthTable = useSelector((state) => state.table.length);
  const indexStart = useSelector((state) => state.table.indexStart);
  const indexEnd = useSelector((state) => state.table.indexEnd);

  const dispatch = useDispatch();

  const showing = totalEmployees ? indexStart + 1 : 0;
  const to = totalEmployees <= lengthTable ? totalEmployees : indexEnd;

  return (
    <div className="footerTable">
      <div>
        Showing <span>{showing}</span> to <span>{to}</span> of{" "}
        <span>{totalEmployees}</span> entries
      </div>
      <div>
        {indexStart > 0 && (
          <button className="btn" onClick={() => dispatch(previous())}>
            Previous
          </button>
        )}
        {indexEnd < totalEmployees && (
          <button className="btn" onClick={() => dispatch(next())}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default FooterTable;
