import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (err) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", ".", "=", "/"].map((btn) => (
          <button
            key={btn}
            onClick={
              btn === "="
                ? handleCalculate
                : () => handleClick(btn)
            }
          >
            {btn}
          </button>
        ))}
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
