import "./styles.css";
import { useState } from "react";

export default function App() {
  //define initial state
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

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
  }
  return (
    <div className="App">
      <div>
        Number:
        <input type="text" value={input} onChange={validateInput} />
        <button onClick={handleInput}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
