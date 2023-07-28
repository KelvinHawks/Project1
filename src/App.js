//import {useState} from 'react'
import "./styles.css";
import NewGoal from './newGoal'
import GoalList from './goalList'
import { useState } from "react";
export default function App() {
  const[newGoalsArray, setnewGoalsArray] = useState([])
  // const newGoalsArray = [
  //   {id:1, todo:'learn react'},
  //   {id:2, todo:'learn react'},
  //   {id:3, todo:'learn react'},
  //   {id:4, todo:'learn react'}
  // ]
  function pushGoals(newGoal){
    setnewGoalsArray(newGoalsArray.concat(newGoal))
    
  }
  return (
    <div className="App">
      <NewGoal pushGoals={pushGoals}/>
      <GoalList goals={newGoalsArray}/>
    </div>
  );
}
