import React from "react";
import NewGoal from "./newGoal";

function GoalList({goals}) {
//const goalsArray = newGoalsArray.map(()=>{})
const array = goals.map((goal)=>{
  return <li>{goal.todo}</li>
})

  return (
    <div>
      <ul>
       {array}
      </ul>
    </div>
  );
}
export default GoalList;
