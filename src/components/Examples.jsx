import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  function clickHandler(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          onClick={clickHandler}
          isSelected={selectedTopic === EXAMPLES.components.title}
        >
          {EXAMPLES.components.title}
        </TabButton>
        <TabButton
          onClick={clickHandler}
          isSelected={selectedTopic === EXAMPLES.jsx.title}
        >
          {EXAMPLES.jsx.title}
        </TabButton>
        <TabButton
          onClick={clickHandler}
          isSelected={selectedTopic === EXAMPLES.props.title}
        >
          {EXAMPLES.props.title}
        </TabButton>
        <TabButton
          onClick={clickHandler}
          isSelected={selectedTopic === EXAMPLES.state.title}
        >
          {EXAMPLES.state.title}
        </TabButton>
      </menu>

      <div id="tab-content">
        {selectedTopic ? (
          <>
            <h3>{selectedTopic}</h3>
            <p>{EXAMPLES[selectedTopic?.toLowerCase()].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic.toLowerCase()].code}</code>
            </pre>
          </>
        ) : (
          <h3>Please select a topic</h3>
        )}
      </div>
    </section>
  );
};

export default Examples;
