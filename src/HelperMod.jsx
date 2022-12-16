import './App.css';
import WeightInputForm from './components/weightinput/WeightInput';
import { useState } from 'react';

function HelperMod() {
  
  const [platesToDisplay, setPlates] = useState([]);


  const handleChange = (plates) => {
    setPlates(plates);
  }


  return(
    <div className="App">
      <h1>How to load your powerlifting bar ?</h1>
      <div className='Plates'>
        {platesToDisplay.map((plate) =>{
            return plate;
        })}
      </div>
      <div className='InputWeight'>
        <WeightInputForm loadBar={handleChange}></WeightInputForm>
      </div>
    </div>
    );
}

export default HelperMod;
