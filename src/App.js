import { useRef, useEffect, useState } from "react";
import "./App.css";

import { TweenMax, Power3 } from "gsap";

function App() {
 let circle1 = useRef(null);
 let circle2 = useRef(null);
 let circle3 = useRef(null);
 const [clicked, setClicked] = useState(false);

 const expandHandler = () => {
  setClicked(true);

  TweenMax.to(circle2, 1, {
   width: 200,
   height: 200,
   ease: Power3.easeInOut,
  });
 };

 const srinkHandler = () => {
  setClicked(false);
  TweenMax.to(circle2, 0.5, {
   width: 75,
   height: 75,
   ease: Power3.easeInOut,
  });
 };

 useEffect(() => {
  // * The bellow code can do the job but This is not a good practice
  //   TweenMax.from(circle1, 1, {
  //    opacity: 0,
  //    x: 40,
  //    ease: Power3.easeInOut,
  //   });
  //   TweenMax.from(circle2, 1, {
  //    opacity: 0,
  //    x: 40,
  //    ease: Power3.easeInOut,
  //    delay: 0.2,
  //   });
  //   TweenMax.from(circle3, 1, {
  //    opacity: 0,
  //    x: 40,
  //    ease: Power3.easeInOut,
  //    delay: 0.4,
  //   });
  // * Instead I use staggerFrom
  TweenMax.staggerFrom(
   [circle1, circle2, circle3],
   1,
   {
    opacity: 0,
    x: 40,
    ease: Power3.easeInOut,
   },
   0.2
  );
 }, []);
 return (
  <div className="App">
   <div className="header">
    <h1>Stagger Animations</h1>
    <p>Click on the yellow ballon to expand it</p>
   </div>
   <div className="circle-container">
    <div
     ref={(el) => {
      circle1 = el;
     }}
     className="circle circle-1"
    ></div>
    <div
     ref={(el) => {
      circle2 = el;
     }}
     className="circle circle-2"
     onClick={clicked ? srinkHandler : expandHandler}
    ></div>
    <div
     ref={(el) => {
      circle3 = el;
     }}
     className="circle circle-3"
    ></div>
   </div>
  </div>
 );
}

export default App;
