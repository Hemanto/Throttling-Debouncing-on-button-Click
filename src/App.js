import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [state, setState] = useState(false);
  const clickhandler = () => {
    if (!state) {
      console.log("click");
      setState(true);
      setTimeout(() => {
        setState(false);
        console.log("setTimeout");
      }, 2000);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button disabled={state} onClick={clickhandler}>
        Throttling
      </button>
    </div>
  );
}
