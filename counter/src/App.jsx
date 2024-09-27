
import { useState } from 'react'
import './App.css'



function App() {
 
//let counter = 1
const [counter ,setCounter] =useState(1)

const addValue =()=>{
  //counter=counter+1
 // console.log(counter)
 //setCounter(counter+1)
 setCounter((prevCounter)=>prevCounter+1)//do not batch
 

}
const removeValue=()=>{
  if(counter<=0){
    return
  
  }
  else{setCounter(counter-1)}
}
  return (
    <>
     <h1>react learn {counter}</h1>
     <h2>counter value : {counter}</h2>
     <button onClick={addValue}>Add value</button>{" "}
     <button onClick={removeValue}>Remove value</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
