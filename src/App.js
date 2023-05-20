import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [state, setState] = useState(false);
  const [debouncing, setDebouncing] = useState(false);
  const throttlinghandler = () => {
    if (!state) {debouncing
      setState(true);
      console.log("disable calls");
     setTimeout(() => {
        setState(false);
      }, 2000);
    }
  };

  const debouncingHandler =()=>{
   console.log("Debounching");
  }

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);


  useEffect(() => {
      const timer = setTimeout(() => {
        debouncingHandler();
        console.log("Enable call");
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
  }, [debouncing]);

  return (
    <div className="App">
      <h1>Throttling and Debouncing </h1>
      <h2>Throttling button will disbale for 2s and enable after 2s</h2>
      <button disabled={state} onClick={throttlinghandler}>
        Throttling
      </button>
    
      <button onClick={()=>setDebouncing(!debouncing)}>
      Debouncing
      </button>

      <h2>Debouncing button will console after 2s and will extend the timer in every click</h2>
    
    </div>
  );
}
