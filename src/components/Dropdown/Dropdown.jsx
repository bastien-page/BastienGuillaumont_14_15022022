function Dropdown({ name, datas, onChange }) {
  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>
        State
      </label>
      <select
        className="input__input"
        name={name}
        id={name}
        onChange={onChange}
      >
        {datas.map((data) => (
          <option key={data.name} value={data.value}>
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
