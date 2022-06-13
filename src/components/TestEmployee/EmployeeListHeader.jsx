import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";

function EmployeeListHeader({ setFilter, setLength }) {
  return (
    <div className="headerTable">
      <Dropdown
        name={"Show"}
        datas={[
          { name: 10, value: 10 },
          { name: 25, value: 25 },
          { name: 50, value: 50 },
          { name: 100, value: 100 },
        ]}
        onChange={(e) => setLength(e.target.value)}
      >
        entries
      </Dropdown>
      <Input
        type="text"
        label="Search"
        name="search"
        onChange={(e) => {
          e.target.value.length >= 3
            ? setFilter(e.target.value)
            : setFilter("");
        }}
      />
    </div>
  );
}

export default EmployeeListHeader;
