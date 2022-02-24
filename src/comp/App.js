import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { Timeline } from "gsap/gsap-core";
import "../styles/App.scss";
import beach from "../media/beach.jpg";

const App = () => {
 let overlay = useRef(null);
 let img = useRef(null);

 useEffect(() => {
  let t1 = gsap.timeline();
  // animations
  t1.to(img, { duration: 1, opacity: 1 });
 }, []);

 return (
  <div className="App">
   <div className="img-cont">
    <div
     ref={(el) => {
      overlay = el;
     }}
     className="overlay"
    ></div>
    <img
     ref={(el) => {
      img = el;
     }}
     src={beach}
     className="img"
     alt="beach"
    />
   </div>
  </div>
 );
};

export default App;
