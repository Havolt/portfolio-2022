import { useState } from "react";
import "./styles/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Bio from "./components/Bio";

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  return (
    <div className="App">
      {showHeader && <Header></Header>}
      <Bio></Bio>
      {showFooter && <Footer></Footer>}
    </div>
  );
}

export default App;
