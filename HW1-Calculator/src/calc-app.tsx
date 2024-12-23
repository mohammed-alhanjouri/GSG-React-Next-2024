import { useState } from "react";

// const CalcApp = () => {
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState<number | null>(null);

//   const handleClick = (value: string) => {
//     if (value === "C") {
//       setInput("");
//       setResult(null);
//     } else if (value === "=") {
//       setResult(eval(input));
//     } else {
//       setInput(input + value);
//     }
//   };

//   return (
//     <div
//       style={{
//         textAlign: "center",
//         marginTop: "50px",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <h1>Calculator</h1>
//       {/* Display section */}
//       <div
//         style={{
//           width: "300px",
//           height: "50px",
//           margin: "10px auto",
//           padding: "10px",
//           fontSize: "1.5em",
//           textAlign: "right",
//           backgroundColor: "#f1f5f9",
//           border: "1px solid #ccc",
//           borderRadius: "8px",
//         }}
//       >
//         {result !== null ? `${input} = ${result}` : input || "0"}
//       </div>

//       {/* Buttons grid */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 80px)",
//           gap: "10px",
//           justifyContent: "center",
//         }}
//       >
//         {/* Number Buttons */}
//         {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((num) => (
//           <button
//             key={num}
//             onClick={() => handleClick(num)}
//             style={{
//               width: "80px",
//               height: "80px",
//               backgroundColor: "#3b82f6",
//               color: "white",
//               fontSize: "1.5em",
//               border: "none",
//               borderRadius: "10px",
//               cursor: "pointer",
//             }}
//           >
//             {num}
//           </button>
//         ))}

//         {/* Operator Buttons */}
//         {["+", "-"].map((op) => (
//           <button
//             key={op}
//             onClick={() => handleClick(op)}
//             style={{
//               width: "80px",
//               height: "80px",
//               backgroundColor: "#f59e0b",
//               color: "white",
//               fontSize: "1.5em",
//               border: "none",
//               borderRadius: "10px",
//               cursor: "pointer",
//             }}
//           >
//             {op}
//           </button>
//         ))}

//         {/* Clear Button */}
//         <button
//           onClick={() => handleClick("C")}
//           style={{
//             width: "80px",
//             height: "80px",
//             backgroundColor: "#ef4444",
//             color: "white",
//             fontSize: "1.5em",
//             border: "none",
//             borderRadius: "10px",
//             cursor: "pointer",
//           }}
//         >
//           C
//         </button>

//         {/* Equals Button */}
//         <button
//           onClick={() => handleClick("=")}
//           style={{
//             width: "260px",
//             height: "80px",
//             backgroundColor: "#10b981",
//             color: "white",
//             fontSize: "1.5em",
//             border: "none",
//             borderRadius: "10px",
//             cursor: "pointer",
//             gridColumn: "span 3",
//           }}
//         >
//           =
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CalcApp;
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

      <button onClick={() => handleClick("C")} className="button-clear">
        C
      </button>

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
