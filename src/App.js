import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Demo } from "./Demo";
import { Demo1 } from "./Demo1";
function App() {
  const [change, setChange] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setChange(!change)}>Click Here</button>
      {change ? <Demo /> : <Demo1 />}
    </div>
  );
}

export default App;
