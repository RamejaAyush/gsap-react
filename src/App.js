import { useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { TweenMax, Power3 } from "gsap";

function App() {
 let logoItem = useRef(null);
 let text = useRef(null);

 useEffect(() => {
  TweenMax.to(logoItem, 2, {
   y: -20,
   scale: 1,
   duration: Power3.easeInOut,
  });

  TweenMax.to(text, 0.8, {
   y: -20,
   opacity: 1,
   duration: Power3.easeInOut,
   stagger: 1,
  });
 }, []);

 return (
  <div className="App">
   <header className="App-header">
    <img
     ref={(el) => {
      logoItem = el;
     }}
     src={logo}
     className="App-logo"
     alt="logo"
    />
    <p
     ref={(el) => {
      text = el;
     }}
    >
     Edit <code>src/App.js</code> and save to reload.
    </p>
    {/* <a
     className="App-link"
     href="https://reactjs.org"
     target="_blank"
     rel="noopener noreferrer"
    >
     Learn React
    </a> */}
   </header>
  </div>
 );
}

export default App;
