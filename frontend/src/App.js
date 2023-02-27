import "./styles/App.css";

import { SectionProvider } from "./context";

import Bio from "./components/Bio";
// import Clients from "./components/Clients";
import Cv from "./components/Cv";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <SectionProvider>
        <Bio></Bio>
        <Nav></Nav>
        {/* <Clients></Clients> */}
        <Cv></Cv>
      </SectionProvider>
    </div>
  );
}

export default App;
