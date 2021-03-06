import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";

import states from "../../assets/dataStates.json";
import departments from "../../assets/dataDepartment.json";
import { useDispatch } from "react-redux";

import { addUser } from "../../slices/user.slice";
import Modal from "bg-modal-react";

function Form() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [birthday, setBirthday] = useState();
  const [startDay, setStartDay] = useState();
  const [street, setStreet] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [department, setDepartment] = useState();

  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const employeeData = {
    firstName,
    lastName,
    birthday,
    startDay,
    street,
    city,
    state,
    zip,
    department,
    id: Date.now(),
  };

  const createEmployee = (e) => {
    e.preventDefault();
    dispatch(addUser(employeeData));
    e.target.reset();
    setOpenModal(true);
  };

  const customModal = {
    backgroundContainer: "rgba(146, 146, 146, 0.6)",
    backgroundColor: "#8ea719",
    topPosition: "50%",
    leftPosition: "50%",
    boxShadow: "5px 5px 15px 5px rgba(0, 0, 0, 0.43)",
    color: "white",
  };

  return (
    <div className="form">
      <Link className="btn" to="/BastienGuillaumont_14_15022022/employee">
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
          <Dropdown
            name={"State"}
            datas={states}
            onChange={(e) => setState(e.target.value)}
          />
          <Input
            type={"number"}
            name={"zip"}
            label={"ZIP Code"}
            onChange={(e) => setZip(e.target.value)}
          />
        </fieldset>
        <Dropdown
          name={"Department"}
          datas={departments}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <input className="btn" type="submit" value="Save" />
      </form>
      {openModal && (
        <Modal style={customModal} setOpenModal={setOpenModal}>
          Employee created
        </Modal>
      )}
    </div>
  );
}

export default Form;
