import React, { useState } from "react";

function NewGoal({ pushGoals }) {
  const [inputValue, setinputValue] = useState({
    inputs: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setinputValue({
      ...inputValue,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoals = {
      id: Math.floor(Math.random() * 100),
      todo: inputValue.inputs
    };
    pushGoals(newGoals);
    setinputValue({ inputs: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} name="inputs" value={inputValue.inputs}/>
      <button type="submit">submit</button>
    </form>
  );
}
export default NewGoal;
