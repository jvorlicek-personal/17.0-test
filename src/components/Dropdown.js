import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({label, options, selected, onSelectedChange }) => {
  const [showDropdown, toggleShowDropdown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      toggleShowDropdown(false);
    };

    document.body.addEventListener("click", onBodyClick, {capture : true});

    return () => {
      document.body.removeEventListener('click', onBodyClick, {capture : true});
    };
  }, []);

  const renderOptions = options.map((option, index) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={`${option.value}_${index}`}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className=" field">
        <label className="label">{label}</label>
        <div
          onClick={() => toggleShowDropdown(!showDropdown)}
          className={`ui selection dropdown ${
            showDropdown ? "visible active" : ""
          }`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${showDropdown ? "visible transition" : ""}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
