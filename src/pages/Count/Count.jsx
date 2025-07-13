
import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Count = () => {
const [count,setCount] = useState(0)

const navigate = useNavigate() 

const handleSum = () => {
    setCount(count + 1)
    console.log(count)
}

const handleSub = () => {
    setCount(count - 1)
}

useEffect(() => {

    alert('Hello World')

}, [])

const handleClick = ()=> {
    navigate('/')
}


  return (
    <div>
<br />
      <h1>This is value of count = {count} </h1>
<br />
<hr />

      <button onClick={handleSum}> add count </button>

      <br />
    <br/>

      <button onClick={handleSub}> sub count </button>

      <br />
      <br />

      <button onClick={handleClick}> Go to Home ! </button>

    </div>

   
  );
};

export default Count