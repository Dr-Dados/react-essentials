import React from "react";

const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <li>
      <button
        className={isSelected ? "active" : null}
        onClick={() => {
          onSelect(children);
        }}
      >
        {children}
      </button>
    </li>
  );
};

export default TabButton;
