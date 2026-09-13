"use client";
import { useState } from "react";

export default function Calculator() {

  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [secondNumber, setSecondNumber] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [value, setValue] = useState<number | null>(null);
  
  function onClickHandler() {
    if (firstNumber == null || secondNumber == null || operator == null) return 
    switch (operator) {
      case "+":
        setValue(firstNumber + secondNumber);
        break;
      case "-":
        setValue(firstNumber - secondNumber);
        break;
      case "*":
        setValue(firstNumber * secondNumber);
        break;
      case "/":
        setValue(firstNumber / secondNumber);
        break;
      default:
        setValue(NaN);
    }
  }

  return (
    <div>
      <h1>Calculator</h1>
      <p>This is a simple calculator page.</p>
      <input type="text" placeholder="Enter a first number" onChange={(e) => {setFirstNumber(Number(e.target.value))}} />
      <input type="text" placeholder="Enter an operator (+, -, *, /)" onChange={(e) => {setOperator(e.target.value)}}/>
      <input type="text" placeholder="Enter a second number" onChange={(e) => {setSecondNumber(Number(e.target.value))}}/>
      <p>result: {value == null ? 0 : value}</p>
      <button onClick={onClickHandler}>Calculate</button>
    </div>
  );
}