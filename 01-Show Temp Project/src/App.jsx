import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [temp , setTemp] = useState(20)
  return (
      <section id="wrapper" className={temp > 15 ? "too-warm" : "too-cold"}>
        <header></header>
        <main id="main" className="">
          <p id="temp">{temp}C</p>
          <div id="buttons">
            <button id="decrease" onClick={() => setTemp(prevTemp => prevTemp - 1 )}>Decrease</button>
            <button id="increase" onClick={() => setTemp(prevTemp => prevTemp + 1 )}>Increase</button>
          </div>
        </main>
        <footer></footer>
        <div id="bg-blur"></div>
      </section>
  )
}

export default App
