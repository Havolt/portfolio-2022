import { useState } from "react";
import "./App.css";

import Header from "./components/Header";

function App() {
  const [showHeader, setShowHeader] = useState(true);

  return <div className="App">{showHeader && <Header></Header>}</div>;
}

export default App;
