import "./styles.css";
import { useState } from "react";

export default function App() {
  //define initial state
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [arr, setArr] = useState([]);

  //make sure input is only numbers, no decimal
  function validateInput(event) {
    const my_value = event.target.value; //get from input field
    const validValue = my_value.replace(/[^0-9]/g, ""); //anything non number becomes blank
    setInput(validValue); //set to the new state
  }

  //calculate the difference
  function handleInput() {
    const user_input = input; //take our curr input we got from the new state from validInput
    reversed_str = user_input.split("").reverse().join(""); //reverse it
    const result = Math.abs(Number(user_input) - Number(reversed_str)); //find the difference

    setResult(result); //set our results aka this is the difference
    setArr([]);
    FizzBuzzFibonacci(result, 0);
  }

  // so index is basically, what fibonacci number is at 
  // the current index, it will give you 1 answer and that 
  // 1 answer, we will be seeing the fizzbuzz, of it and 
  // then adding that 1 number to the array

  function FizzBuzzFibonacci(result, index) {
    const fibNumber = fibonacci(index);
    if (fibNumber >= result) {
      return;
    }
    let value;
    if (fibNumber == 0) {
      value = fibNumber;
    } else if (fibNumber % 3 === 0 && fibNumber % 5 === 0) {
      value = "FizzBuzz";
    } else if (fibNumber % 3 === 0) {
      value = "Fizz";
    } else if (fibNumber % 5 === 0) {
      value = "Buzz";
    } else {
      value = fibNumber;
    }

    // Update state with new value
    setArr((arr) => [...arr, value]);

    // Recursive call
    FizzBuzzFibonacci(result, index + 1);
  }
  function fibonacci(num) {
    if (num <= 0) return 0; // Base case: Fibonacci of 0 is 0
    if (num === 1) return 1; // Base case: Fibonacci of 1 is 1
    return fibonacci(num - 1) + fibonacci(num - 2); // Recursive case
  }
  return (
    <div className="App">
      <div>
        Number:
        <input type="text" value={input} onChange={validateInput} />
        <button onClick={handleInput}>Submit</button>
      </div>
      <div>Result: {result}</div>
      <div>Result arr: {arr.join(", ")}</div>
    </div>
  );
}
