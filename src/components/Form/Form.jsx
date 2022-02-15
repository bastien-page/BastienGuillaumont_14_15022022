import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";

function Form() {
  return (
    <div className="form">
      <Link className="form__btn" to="/employee">
        View Current Employees
      </Link>
      <form action="">
        <h2>Create Employee</h2>
        <Input
          type={"text"}
          name={"firstName"}
          label={"First Name"}
          method={"ok"}
        />
        <Input
          type={"text"}
          name={"lastName"}
          label={"Last Name"}
          method={"ok"}
        />
        <Input type={"date"} name={"birthday"} label={"Date of Birth"} />
        <Input type={"date"} name={"startDate"} label={"Start Date"} />
        <fieldset>
          <legend>Address</legend>
          <Input type={"text"} name={"street"} label={"Street"} />
          <Input type={"text"} name={"city"} label={"City"} />
          <Input type={"number"} name={"zip"} label={"ZIP Code"} />
        </fieldset>

        <input className="form__btn" type="submit" value="Save" />
      </form>
    </div>
  );
}

export default Form;
