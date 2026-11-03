import { Plus, Minus } from "lucide-react";
import { useState } from "react";

function Counter() {
  // 1. Fixed useState syntax and variable name
  const [state, setState] = useState({ count: 0 });
  const count = state.count;

  function Decrease() {
    if (count > 0) {
      setState((prevState) => {
        return { ...prevState, count: prevState.count - 1 };
      });
    }
  }

  function Increase() {
    // 2. Fixed setter to match setState
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }

  return (
    <div className="flex justify-center items-center gap-5 bg-chip pl-1.5 rounded-2xl border border-line">
      <button className="text-line-dashed" onClick={Decrease}>
        <Minus size={14} />
      </button>
      <span className="">{count}</span>
      <button
        className="relative size-6 bg-brand text-white rounded-full flex items-center justify-center"
        onClick={Increase}
      >
        <Plus size={14} />
      </button>
    </div>
  );
}

export default Counter;
