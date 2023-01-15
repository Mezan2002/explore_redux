import { useReducer } from "react";
import "./App.css";

function App() {
  const initialState = 0;
  const reducerFn = (state, action) => {
    if (action.type === "INC") {
      return state + 1;
    } else if (action.type === "DEC") {
      return state - 1;
    } else {
      return state;
    }
  };
  const [state, dispatch] = useReducer(reducerFn, initialState);
  return (
    <div className="App">
      <div>
        <h2>{state}</h2>
        <h2>Hi</h2>
        <button onClick={() => dispatch({ type: "DEC" })}>-</button>
        <button onClick={() => dispatch({ type: "INC" })}>+</button>
      </div>
    </div>
  );
}

export default App;
