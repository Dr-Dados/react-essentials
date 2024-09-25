import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  function clickHandler(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }
  return (
    <>
      <Header />
      <div>
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {CORE_CONCEPTS.map((concept) => (
                <CoreConcept
                  key={concept.title}
                  title={concept.title}
                  description={concept.description}
                  img={concept.image}
                />
              ))}
            </ul>
          </section>
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
                  <p>{EXAMPLES[selectedTopic?.toLowerCase()]?.description}</p>
                  <pre>
                    <code>{EXAMPLES[selectedTopic.toLowerCase()]?.code}</code>
                  </pre>
                </>
              ) : (
                <h3>Please select a topic</h3>
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
