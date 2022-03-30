import { useState } from "react";
import "./styles/App.css";

import Header from "./components/Header";

function App() {
  const [showHeader, setShowHeader] = useState(false);

  return <div className="App">{showHeader && <Header></Header>}</div>;
}

export default App;
