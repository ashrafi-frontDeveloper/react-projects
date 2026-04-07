import { useState } from "react";
import "./App.css";

function App() {

  const [temp , setTemp] = useState(25)

  const handleDecrease = () => {
    const newTemp = temp - 1
    setTemp(newTemp)
  }

  const handleIncrease = () => {
    const newTemp = temp + 1
    setTemp(newTemp)
  }

  return (
      <section id="wrapper" className={temp > 15 ? "too-warm" : "too-cold"}>
        <header></header>
        <main id="main" className="">
          <p id="temp">{temp}C</p>
          <div id="buttons">
            <button id="decrease" onClick={handleDecrease}>Decrease</button>
            <button id="increase" onClick={handleIncrease}>Increase</button>
          </div>
        </main>
        <footer></footer>
        <div id="bg-blur"></div>
      </section>
  );
}

export default App;
