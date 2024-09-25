import React from "react";

const TabButton = ({ children, onClick, isSelected }) => {
  return (
    <li>
      <button
        className={isSelected ? "active" : null}
        onClick={() => {
          onClick(children);
        }}
      >
        {children}
      </button>
    </li>
  );
};

export default TabButton;
