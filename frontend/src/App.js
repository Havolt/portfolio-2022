import { useState } from "react";
import "./styles/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="App">
      {showHeader && <Header></Header>}
      <Bio></Bio>
      <Nav></Nav>
      {showContact && <Contact></Contact>}
      {showFooter && <Footer></Footer>}
    </div>
  );
}

export default App;
