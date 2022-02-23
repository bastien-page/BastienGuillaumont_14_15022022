import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";

function HeaderTable() {
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
      >
        entries
      </Dropdown>
      <Input type="text" label="Search" name="search" />
    </div>
  );
}

export default HeaderTable;
