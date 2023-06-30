import React from 'react'
import {useRef,useState} from 'react'
const Calculator = ({handleCLick,deleteres}) => {
 const [data,setData]=useState(0)
 const [showResult,setShowResult]=useState(false)
 const firstNum=useRef(null)
 const secendNum=useRef(null)
 const ope=useRef(null)
 function handleCLick(){
  const num1=firstNum.current.value
  const num2=secendNum.current.value
  const operation=ope.current.value
   switch(operation){
   case '+':
     setData(num1+num2);
     break;
   case '-':
     setData(num1-num2);
     break;
   case '*':
     setData(num1*num2);
     break;
   case '/':
     setData(num1/num2)      
     break;
  }
  setShowResult(true)
  }

  function deleteres(){
    setShowResult(false)
  }
  return (
    <div>
     <input type='number' ref={firstNum}/>
     <select ref={ope}>
      <option>+</option>
      <option>-</option>
      <option>*</option>
      <option>/</option>
     </select>
     <input type='number' ref={secendNum}/>
     
     <button onClick={handleCLick}>calculate</button>
     <button onClick={deleteres}>delete</button>
     {showResult && <p>{data}</p>}
    </div>
  )
}

export default Calculator
