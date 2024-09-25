import React from "react";
import TabButton from "./TabButton";

const Tabs = ({ children,buttons }) => {
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }
  return (
    <>
      <menu>
        {buttons}
      </menu>
      {children}
    </>
  );
};

export default Tabs;
