import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";



function App() {

  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  const [temp,setTemp] =useState();

  const weatherURL =() => `https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${city}&days=7&aqi=no&alerts=no`

  const saveCity=(city)=>{
    setCity(input);
    console.log(city);

    city && weatherAPI();
  }
  

  const weatherAPI= async () =>{
    const response= await fetch(weatherURL(city));
    const reaction= await response.json();
    console.log(reaction);
    setTemp(reaction.current.temp_c);
  }

  return (
    <div className='container bg-warning p-5 mt-5 rounded-4'>
      <p className='text-center'>
        <h2>Weather Ap</h2>
        </p>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
          onChange={(e) => {setInput(e.target.value)}}/>
      </div>




      
      <div className='text-center'>
        <button type="button" class="btn btn-primary " onClick={saveCity}>Fetch weather</button>
      </div>
      <p className='text-center'>
        <div>
        {temp && <div>
          <h3>City:{city}</h3>
          <h3>Temp:{temp}</h3>
        </div>}
        
        

       </div>
      
      </p>
      
     {/* {<h3>{input}</h3>} */}
      
           </div>
  );
}
export default App;

