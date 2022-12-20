import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Demo } from "./Demo";
import { Demo1 } from "./Demo1";
function App() {
  const [change, setChange] = useState(true);
  const list = ["BMW", "Ferrari", "Ford", "Audi", "Maruti", "VW", "Hundai"];
  //              0         1       2       3        4        5      6
  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
      console.log(list);
      return;
    }
    const filteredValue = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValue);
    console.log(event.target.value);
    console.log(list.indexOf("Audi"));
  };
  return (
    <div className="App">
      {/* <button onClick={() => setChange(!change)}>Click Here</button>
      {change ? <Demo /> : <Demo1 />} */}
      <div>
        Search: <input type="text" name="list" onChange={handleSearch} />
      </div>
      {filterList.map((item, index) => (
        <div key={index}>{item}</div>
      ))}

      {/* {list.map((ls) => (
        <h1>{ls}</h1>
      ))} */}
    </div>
  );
}

export default App;

//comp - captial
//return jsx
//props - properties - {} - template syntax

// function ComponentOne(){
//   return (
//     <div>Hello
//     </div>
//   )
// }
