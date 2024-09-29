import React from "react";

function Dropdown({ title, option , fun }) {
  return (
    <div className="select">
      <select onChange={fun} defaultValue="0" name="format" id="format">
        <option value="0" disabled>
          {title}
        </option>
        {option.map((item, index) => (
          <option key={index} value={item} >
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
