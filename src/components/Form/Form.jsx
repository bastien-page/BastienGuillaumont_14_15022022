import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";

function Form() {
  const [firsName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [birthday, setBirthday] = useState();
  const [startDay, setStartDay] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();

  const employeeData = {
    firsName,
    lastName,
    birthday,
    startDay,
    street,
    city,
    zip,
  };

  const createEmployee = (e) => {
    e.preventDefault();
    console.log(employeeData);
  };

  return (
    <div className="form">
      <Link className="btn" to="/employee">
        View Current Employees
      </Link>
      <form action="" onSubmit={(e) => createEmployee(e)}>
        <h2>Create Employee</h2>
        <Input
          type={"text"}
          name={"firstName"}
          label={"First Name"}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          type={"text"}
          name={"lastName"}
          label={"Last Name"}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          type={"date"}
          name={"birthday"}
          label={"Date of Birth"}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <Input
          type={"date"}
          name={"startDate"}
          label={"Start Date"}
          onChange={(e) => setStartDay(e.target.value)}
        />
        <fieldset>
          <legend>Address</legend>
          <Input
            type={"text"}
            name={"street"}
            label={"Street"}
            onChange={(e) => setStreet(e.target.value)}
          />
          <Input
            type={"text"}
            name={"city"}
            label={"City"}
            onChange={(e) => setCity(e.target.value)}
          />
          <Input
            type={"number"}
            name={"zip"}
            label={"ZIP Code"}
            onChange={(e) => setZip(e.target.value)}
          />
        </fieldset>

        <input className="btn" type="submit" value="Save" />
      </form>
    </div>
  );
}

export default Form;
