import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Examples from "./components/Examples";
import CoreConcepts from "./components/CoreConcepts";

function App() {
  return (
    <>
      <Header />
      <div>
        <main>
          <CoreConcepts />
          <Examples />
        </main>
      </div>
    </>
  );
}

export default App;
