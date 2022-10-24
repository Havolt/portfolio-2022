import { useState } from "react";
import "./styles/App.css";

import { SectionProvider } from "./context";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Bio from "./components/Bio";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="App">
      <SectionProvider>
        {showHeader && <Header></Header>}
        <Bio></Bio>

        <Nav></Nav>

        <Clients></Clients>

        {showContact && <Contact></Contact>}
        {showFooter && <Footer></Footer>}
      </SectionProvider>
    </div>
  );
}

export default App;
