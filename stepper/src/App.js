import { useState } from "react";
import "./App.css";
import Stepper from "./components/stepper-item";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [show,setShow]= useState(true);
  return (
    <>
      <div
        className="App"
        style={{ justifyContent: "center", display: "flex" }}
      >
        {show && <Stepper stepCount={3} curruntIndex={currentStep} />} 
      </div>
     
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
        <button onClick={()=>setShow(!show)}>show</button>
      </div>
    </>
  );
}

export default App;
