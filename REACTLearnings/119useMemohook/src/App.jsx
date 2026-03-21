import { useState, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

const nums = new Array(30000000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29000000,
  };
});

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setnumbers] = useState(nums);

  // const magical = numbers.find(item=>item.isMagical===true)
  //expensive computations

  // So to avoid the recomputaion we can use the memo to save the value for the future use
  const magical = useMemo(
    () => numbers.find((item) => item.isMagical === true),
    [numbers],
  )
  // if count is added on the dependancy arrary then it can change on the each count change 
  // this help as only one time the computation is done 

  // here we can add the dependecies array when the recomputaions is done when the numbers or nums array changes 

  return (
    <>
      <span>Magical Number is {magical.index}</span>
      {/* this causes the slowness when anything changes for ex count changes then the this computation is done everytime  */}
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() =>{ setCount((count) => count + 1);
            if(count == 10){
              setnumbers(new Array(10000000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 9000000,
  };
})
)
            }
          }
          }>
            {/* Here the when the count is 10 then the numbers array getschanged so rerender is necessary  we can observer it when we change the count is 10 then it becomes the slow for a second as computation is redone */}
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
