import React from 'react'
import { useState } from 'react';
export default function App() {
  const [count, setCount] = useState(0);


  function increaseNumber() {
    setCount(count + 1);

  }
  function decreaseNumber() {
    setCount(count - 1);

  }
  function resetNumber() {
    setCount(0);

  }



  return (
    <>
      <div className='container-fluid mt-5' style={{width:"350px"}}>
        <h2 className='text-center text-primary'>useState in React</h2>
        <div className='card shadow-lg border-4 rounded-4'>
          <div className='card-body'>

           <div className='text-center'>
             <h2>Number is :{count}</h2>
            <button className='btn btn-primary ms-1' onClick={increaseNumber}>+</button>
            <button className='btn btn-danger ms-1' onClick={decreaseNumber}>-</button>
            <button className='btn btn-info ms-1' onClick={resetNumber}>Reset</button>
           </div>
          </div>
        </div>
      </div>
    </>
  )
}
