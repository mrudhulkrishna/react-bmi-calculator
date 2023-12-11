import React, { useState,useCallback } from 'react';
import './Bmi.css';

function Bmi (){

  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [msg, setMsg] = useState("");

  const reload = () =>{
    window.location.reload()
  }

  const handleCalculations = (e) =>{
    // e.preventDefoult()

    if(weight === 0 || height === 0){
      alert("Hello please enter a valied number")
    }

    else{
      let bmiFormular =(weight / (height ** 2));
      setBmi(bmiFormular.toFixed())
    }

    if(bmi < 18.5){
      setMsg("You'r underweight")
    }

    else if(18.5 <= bmi < 25){
      setMsg("You'r healthy")
    }

    else if(25 <= bmi < 30){
      setMsg("You'r overweight")
    }

    else{
      setMsg("You'r unhealthy")
    }
    // console.log('hallo world');
  }

  return (
    <div className='app'>
      <div className='container'>
        <h1 className='title'>BMI Calculator</h1>

        <form>
            <div>
               <label>Age :</label><br/>
               <input type='bmi-input' placeholder='Age...' value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>

            <div>
               <label>Weight :</label><br/>
               <input type='bmi-input' placeholder='Weight...' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
            </div>

            <div>
               <label>Height :</label><br/>
               <input type='bmi-input' placeholder='Height...' value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>

            <div className='submit'>
               <button className='btn' type='button' onClick={handleCalculations}>Calculate</button>
               <button className='btn btn-reload' type='submit' onClick={reload}>Reload</button>
            </div>

            <div className='result'>
              <h3>Age :{age}</h3>
              <h3>Your BMI is :{bmi}</h3>
              <p className='message'>{msg}</p>
            </div>
        </form>
        </div> 
    </div>
  )
}

export default Bmi