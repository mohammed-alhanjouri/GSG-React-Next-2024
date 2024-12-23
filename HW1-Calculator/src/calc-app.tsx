import React, { useState } from "react";

const CalcApp: React.FC = () => {
  // Declare state variables for input and result
  const [input, setInput] = useState(""); // Holds the current input string
  const [result, setResult] = useState<number | null>(null); // Holds the calculated result

  // Handles button clicks
  const handleClick = (value: string) => {
    if (value === "C") {
      // Clear the input and result
      setInput("");
      setResult(null);
    } else if (value === "=") {
      // Evaluate the input string as a mathematical expression
      setResult(eval(input)); // WARNING: Using `eval` is risky and can cause security issues.
    } else {
      // Append the clicked value to the input
      setInput(input + value);
    }
  };

  return (
    <div
      style={{
        textAlign: "center", // Center align text
        marginTop: "50px", // Add spacing from the top
        fontFamily: "Arial, sans-serif", // Set font
      }}
    >
      <h1>Calculator</h1>
      {/* Display section */}
      <div
        style={{
          width: "300px", // Fixed width for display
          height: "50px", // Fixed height for display
          margin: "10px auto", // Center display and add margin
          padding: "10px", // Add padding inside the display
          fontSize: "1.5em", // Set font size
          textAlign: "right", // Align text to the right
          backgroundColor: "#f1f5f9", // Light background color
          border: "1px solid #ccc", // Border with a light gray color
          borderRadius: "8px", // Rounded corners
        }}
      >
        {/* Show either the result with the input or just the input, fallback to "0" if empty */}
        {result !== null ? `${input} = ${result}` : input || "0"}
      </div>

      {/* Buttons grid */}
      <div
        style={{
          display: "grid", // Use grid layout for buttons
          gridTemplateColumns: "repeat(3, 80px)", // Three columns of fixed width
          gap: "10px", // Space between buttons
          justifyContent: "center", // Center the grid
        }}
      >
        {/* Number Buttons */}
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((num) => (
          <button
            key={num} // Unique key for each button
            onClick={() => handleClick(num)} // Handle button click
            style={{
              width: "80px", // Fixed width
              height: "80px", // Fixed height
              backgroundColor: "#3b82f6", // Blue background
              color: "white", // White text color
              fontSize: "1.5em", // Larger text size
              border: "none", // No border
              borderRadius: "10px", // Rounded corners
              cursor: "pointer", // Pointer cursor on hover
            }}
          >
            {num} {/* Display the button value */}
          </button>
        ))}

        {/* Operator Buttons */}
        {["+", "-"].map((op) => (
          <button
            key={op} // Unique key for each operator
            onClick={() => handleClick(op)} // Handle operator click
            style={{
              width: "80px", // Fixed width
              height: "80px", // Fixed height
              backgroundColor: "#f59e0b", // Orange background
              color: "white", // White text color
              fontSize: "1.5em", // Larger text size
              border: "none", // No border
              borderRadius: "10px", // Rounded corners
              cursor: "pointer", // Pointer cursor on hover
            }}
          >
            {op} {/* Display the operator */}
          </button>
        ))}

        {/* Clear Button */}
        <button
          onClick={() => handleClick("C")} // Handle clear button click
          style={{
            width: "80px", // Fixed width
            height: "80px", // Fixed height
            backgroundColor: "#ef4444", // Red background
            color: "white", // White text color
            fontSize: "1.5em", // Larger text size
            border: "none", // No border
            borderRadius: "10px", // Rounded corners
            cursor: "pointer", // Pointer cursor on hover
          }}
        >
          C {/* Clear button label */}
        </button>

        {/* Equals Button */}
        <button
          onClick={() => handleClick("=")} // Handle equals button click
          style={{
            width: "260px", // Wider button spanning three columns
            height: "80px", // Fixed height
            backgroundColor: "#10b981", // Green background
            color: "white", // White text color
            fontSize: "1.5em", // Larger text size
            border: "none", // No border
            borderRadius: "10px", // Rounded corners
            cursor: "pointer", // Pointer cursor on hover
            gridColumn: "span 3", // Span across 3 columns
          }}
        >
          = {/* Equals button label */}
        </button>
      </div>
    </div>
  );
};

export default CalcApp;
