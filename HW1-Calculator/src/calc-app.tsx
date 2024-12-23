import { useState } from "react";
import "./calc-app.css";

const CalcApp = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const handleClick = (value: string) => {
    if (value === "C") {
      setInput("");
      setResult(null);
    } else if (value === "=") {
      setResult(eval(input));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="container">
      <h1>Calculator</h1>

      {/* Display Section */}
      <div className="display">
        {result !== null ? `${input} = ${result}` : input || "0"}
      </div>

      {/* Clear Button */}
      <div className="clear-container">
        <button onClick={() => handleClick("C")} className="button-clear">
          C
        </button>
      </div>

      {/* Buttons Grid */}
      <div className="grid">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num)}
            className="button-number"
          >
            {num}
          </button>
        ))}

        {["+", "-"].map((op) => (
          <button
            key={op}
            onClick={() => handleClick(op)}
            className="button-operator"
          >
            {op}
          </button>
        ))}

        <button onClick={() => handleClick("=")} className="button-equals">
          =
        </button>
      </div>
    </div>
  );
};

export default CalcApp;
